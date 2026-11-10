/**
 * Reads the public careers page at hiring.stonesystems.io and turns its server-rendered
 * HTML into typed content. No HTML library is used on purpose (no new dependencies):
 * the page is a known, stable structure — sections carry aria-labelledby ids, each role
 * is an <a href="/…-intake"> card with an <h3>, a <p> and <li> detail lines.
 * Any missing piece throws, and the caller falls back to the saved snapshot.
 */

export const HIRING_ORIGIN = 'https://hiring.stonesystems.io';

export interface HiringRole {
  title: string;
  description: string;
  details: string[];
  cta: string;
  href: string;
}

export interface HiringItem {
  title: string;
  body: string;
}

export interface HiringStep {
  number: string;
  title: string;
  body: string;
}

export interface HiringLetterBlock {
  kind: 'paragraph' | 'quote';
  text: string;
}

export interface HiringContent {
  hero: { title: string; subtitle: string };
  openings: { title: string; roles: HiringRole[] };
  values: { title: string; items: HiringItem[] };
  process: { title: string; steps: HiringStep[] };
  letter: { title: string; subtitle: string; blocks: HiringLetterBlock[]; signature: string };
}

/** The page is ~80KB today; anything far larger is not the page we know and is not worth parsing. */
export const MAX_HIRING_PAGE_BYTES = 512_000;

function codePoint(value: number): string {
  return Number.isFinite(value) && value >= 0 && value <= 0x10ffff
    ? String.fromCodePoint(value)
    : '';
}

function decodeEntities(input: string): string {
  return input
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => codePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec: string) => codePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function textOf(fragment: string | undefined): string {
  if (!fragment) return '';
  return decodeEntities(fragment.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function stripNoise(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '');
}

function sectionFor(html: string, label: string): string {
  const start = html.search(new RegExp(`<section\\b[^>]*aria-labelledby="${label}"`, 'i'));
  if (start < 0) throw new Error(`hiring page: section "${label}" not found`);
  const end = html.indexOf('</section>', start);
  if (end < 0) throw new Error(`hiring page: section "${label}" is malformed`);
  return html.slice(start, end);
}

function allOf(fragment: string, tag: string): string[] {
  const re = new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const out: string[] = [];
  let match = re.exec(fragment);
  while (match) {
    out.push(match[1]);
    match = re.exec(fragment);
  }
  return out;
}

function firstOf(fragment: string, tag: string): string | undefined {
  return allOf(fragment, tag)[0];
}

function required(value: string, what: string): string {
  if (!value) throw new Error(`hiring page: ${what} is empty`);
  return value;
}

function absoluteOnHiringSite(href: string): string {
  const url = new URL(decodeEntities(href), HIRING_ORIGIN);
  if (url.origin !== HIRING_ORIGIN) {
    throw new Error(`hiring page: role link leaves the site (${href})`);
  }
  return url.href;
}

function parseRoles(openings: string): HiringRole[] {
  // A role card is a link that carries its own heading. Other links in the section are ignored.
  const cards = (openings.match(/<a\b[^>]*href="[^"]*"[^>]*>[\s\S]*?<\/a>/gi) ?? []).filter(
    (card) => /<h3\b/i.test(card)
  );
  if (cards.length === 0 && /<h3\b/i.test(openings)) {
    // Headings exist but no card matched: the markup changed shape. Fall back rather than show "no roles".
    throw new Error('hiring page: open roles have headings but no readable role cards');
  }
  return cards.map((card) => {
    const href = /href="([^"]*)"/i.exec(card)?.[1] ?? '';
    const ctaText = textOf(
      /<div[^>]*class="[^"]*__cta[^"]*"[^>]*>([\s\S]*?)<\/div>/i.exec(card)?.[1]
    );
    const cta = ctaText && ctaText.length <= 40 ? ctaText : 'See the role';
    return {
      title: required(textOf(firstOf(card, 'h3')), 'role title'),
      description: textOf(firstOf(card, 'p')),
      details: allOf(card, 'li').map(textOf).filter(Boolean),
      cta,
      href: absoluteOnHiringSite(required(href, 'role link')),
    };
  });
}

function parseItems(section: string): HiringItem[] {
  return allOf(section, 'li').map((item) => ({
    title: required(textOf(firstOf(item, 'h3')), 'value title'),
    body: textOf(firstOf(item, 'p')),
  }));
}

function parseSteps(section: string): HiringStep[] {
  return allOf(section, 'li').map((item) => {
    const paragraphs = allOf(item, 'p').map(textOf);
    return {
      number: paragraphs[0] ?? '',
      title: required(textOf(firstOf(item, 'h3')), 'step title'),
      body: paragraphs[1] ?? '',
    };
  });
}

function parseLetter(section: string): HiringContent['letter'] {
  const article = required(firstOf(section, 'article') ?? '', 'letter body');
  const blocks: HiringLetterBlock[] = [];
  let signature = '';
  const re = /<(p|blockquote)\b([^>]*)>([\s\S]*?)<\/\1>/gi;
  let match = re.exec(article);
  while (match) {
    const [, tag, attrs, inner] = match;
    if (/signature/i.test(attrs)) {
      signature = textOf(inner.replace(/<span[^>]*VisuallyHidden[^>]*>[\s\S]*?<\/span>/i, ''));
    } else {
      const text = textOf(inner);
      if (text) {
        blocks.push({ kind: tag.toLowerCase() === 'blockquote' ? 'quote' : 'paragraph', text });
      }
    }
    match = re.exec(article);
  }
  if (blocks.length === 0) throw new Error('hiring page: letter has no paragraphs');
  const beforeArticle = section.slice(0, section.indexOf('<article'));
  return {
    title: required(textOf(firstOf(beforeArticle, 'h2')), 'letter title'),
    subtitle: textOf(firstOf(beforeArticle, 'p')),
    blocks,
    signature: required(signature, 'letter signature'),
  };
}

export function parseHiringPage(rawHtml: string): HiringContent {
  const html = stripNoise(rawHtml);
  const hero = sectionFor(html, 'hero-title');
  const openings = sectionFor(html, 'openings-title');
  const values = sectionFor(html, 'values-title');
  const process = sectionFor(html, 'process-title');
  const letter = sectionFor(html, 'letter-title');

  const content: HiringContent = {
    hero: {
      title: required(textOf(firstOf(hero, 'h1')), 'headline'),
      subtitle: textOf(firstOf(hero, 'p')),
    },
    openings: {
      title: required(textOf(firstOf(openings, 'h2')), 'open roles title'),
      roles: parseRoles(openings),
    },
    values: {
      title: required(textOf(firstOf(values, 'h2')), 'values title'),
      items: parseItems(values),
    },
    process: {
      title: required(textOf(firstOf(process, 'h2')), 'process title'),
      steps: parseSteps(process),
    },
    letter: parseLetter(letter),
  };

  if (content.values.items.length === 0) throw new Error('hiring page: no values found');
  if (content.process.steps.length === 0) throw new Error('hiring page: no hiring steps found');
  return content;
}
