/**
 * Which posts and service pages a blog post links to, and which posts sit next to it in time.
 * Pure functions with no Sanity client in them, so a unit test can run them and the same post
 * gets the same links on every render.
 */
import type { SanityBlogPost } from './sanity';
import type { ServicePageLink } from './servicePageLinks';

/** Function words, plus the words on nearly every title here. They say nothing about the topic. */
const STOP_WORDS = new Set([
  'a',
  'actually',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'best',
  'business',
  'businesses',
  'by',
  'can',
  'companies',
  'company',
  'contracting',
  'contractor',
  'contractors',
  'do',
  'every',
  'for',
  'from',
  'get',
  'guide',
  'how',
  'in',
  'is',
  'it',
  'its',
  'more',
  'need',
  'of',
  'on',
  'one',
  'only',
  'or',
  'simple',
  'step',
  'steps',
  'stop',
  'that',
  'the',
  'this',
  'tips',
  'to',
  'ultimate',
  'vs',
  'way',
  'ways',
  'what',
  'when',
  'which',
  'why',
  'with',
  'work',
  'works',
  'you',
  'your',
]);

/** "Roofing", "roofers" and "roof" become one word; so do "pricing" and "price". */
export function stem(word: string): string {
  return word
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/(ing|ers|er|es|s)$/, '')
    .replace(/e$/, '');
}

/** The topic words of a piece of text, stemmed, with the noise removed. */
export function topicWords(text: string): Set<string> {
  const roots = text
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((raw) => raw.length >= 3 && !STOP_WORDS.has(raw))
    .map(stem)
    .filter((root) => root.length >= 3);
  return new Set(roots);
}

type PostLike = Pick<SanityBlogPost, 'title' | 'slug' | 'publishDate'> & { targetKeyword?: string };

function postWords(post: PostLike): Set<string> {
  return topicWords(`${post.title} ${post.targetKeyword ?? ''}`);
}

function shared(a: Set<string>, b: Set<string>): number {
  let count = 0;
  a.forEach((word) => {
    if (b.has(word)) count += 1;
  });
  return count;
}

function newestFirst(a: PostLike, b: PostLike): number {
  return (b.publishDate ?? '').localeCompare(a.publishDate ?? '');
}

/**
 * Up to `count` other posts about the same things, most shared topic words first, newest first on a
 * tie. When fewer than `count` share a word, the newest other posts fill the rest, so the block
 * always has something to show.
 */
export function pickRelatedPosts<T extends PostLike>(post: PostLike, posts: T[], count = 3): T[] {
  const mine = postWords(post);
  const others = posts.filter((p) => p.slug.current !== post.slug.current);
  const scored = others
    .map((p) => ({ post: p, score: shared(mine, postWords(p)) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || newestFirst(a.post, b.post))
    .map((s) => s.post);
  const picked = scored.slice(0, count);
  if (picked.length < count) {
    const chosen = new Set(picked.map((p) => p.slug.current));
    for (const p of [...others].sort(newestFirst)) {
      if (picked.length >= count) break;
      if (!chosen.has(p.slug.current)) picked.push(p);
    }
  }
  return picked;
}

/**
 * Up to `count` service pages whose trade or service the post is about ("roofing", "SEO", "lead
 * generation"), most matches first. Pages in `exclude` are skipped so a block above does not
 * repeat here. None is fine: the list hides.
 */
export function pickRelatedServicePages(
  post: PostLike,
  links: ServicePageLink[],
  count = 2,
  exclude: string[] = []
): ServicePageLink[] {
  const mine = postWords(post);
  const skip = new Set(exclude);
  return links
    .filter((link) => !skip.has(link.slug))
    .map((link) => ({ link, score: shared(mine, topicWords(`${link.trade} ${link.service}`)) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || a.link.title.localeCompare(b.link.title))
    .slice(0, count)
    .map((s) => s.link);
}

/** The post published just after this one and the one just before it, by publish date. */
export function postNeighbours<T extends PostLike>(
  post: PostLike,
  posts: T[]
): { newer: T | null; older: T | null } {
  const ordered = [...posts].sort(newestFirst);
  const index = ordered.findIndex((p) => p.slug.current === post.slug.current);
  if (index === -1) return { newer: null, older: null };
  return { newer: ordered[index - 1] ?? null, older: ordered[index + 1] ?? null };
}
