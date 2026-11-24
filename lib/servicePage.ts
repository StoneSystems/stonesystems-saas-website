import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client, urlFor, SanityBlogPost } from './sanity';
import type { ServicePageLink } from './servicePageLinks';

export type { ServicePageLink } from './servicePageLinks';
export { groupByTrade, servicePagePath } from './servicePageLinks';

/**
 * A service page under Trades We Serve (/trades/<slug>): one trade, one service, one keyword.
 * The page is structured data so the template owns the layout. Written by the content engine's
 * Page Publisher into the Sanity type `servicePage` (schema: sanity/servicePage.ts).
 */
export interface ServicePagePicture {
  alt: string;
  /** The Sanity image. */
  image?: SanityImageSource;
  /** A file under /public. Only the local fixtures use this. */
  path?: string;
}

export type ServiceIncludeIcon =
  | 'map'
  | 'star'
  | 'website'
  | 'search'
  | 'report'
  | 'phone'
  | 'content'
  | 'link'
  | 'check';

export interface SanityServicePage {
  _id: string;
  /** The H1. Holds the keyword. */
  title: string;
  slug: { current: string };
  status: 'Draft' | 'Published';
  targetKeyword: string;
  secondaryKeywords?: string[];
  /** The trade as the Trades page names it, e.g. "Roofing". */
  trade: string;
  /** What is sold, e.g. "SEO". */
  service: string;
  metaTitle?: string;
  metaDescription: string;
  publishDate?: string;
  updatedDate?: string;
  hero: { subheading: string; picture?: ServicePagePicture };
  /** The hero picture's real size, read from the asset so the <img> can reserve its space. */
  heroDimensions?: { width: number; height: number } | null;
  /** The short answer to "what is <keyword>", right after the hero. */
  intro: { heading: string; text: string; points?: string[] };
  benefits: { heading: string; items: { title: string; text: string }[] };
  includes: {
    heading: string;
    intro?: string;
    items: { title: string; text: string; icon?: ServiceIncludeIcon }[];
  };
  process: { heading: string; steps: { title: string; text: string }[] };
  /** Drawn by the template from this data, so the words stay text. */
  infographic?: {
    title: string;
    caption?: string;
    items: { label: string; text: string; highlight?: boolean }[];
  };
  sections: { heading: string; body: any[] }[];
  relatedServices: { label: string; path: string; text?: string }[];
  faq: { question: string; answer: string }[];
  videoUrl?: string;
}

const SERVICE_PAGE_QUERY = `*[_type == "servicePage" && slug.current == $slug && status == "Published"][0] {
  ...,
  "heroDimensions": hero.picture.image.asset->metadata.dimensions { width, height }
}`;

const SERVICE_PAGE_LINKS_QUERY = `*[_type == "servicePage" && status == "Published"] | order(trade asc, title asc) {
  title,
  "slug": slug.current,
  trade,
  service
}`;

const RELATED_POSTS_QUERY = `*[_type == "blogPost" && status == "Published" && (title match $words || targetKeyword match $words)] | order(publishDate desc)[0...3] {
  _id,
  title,
  slug,
  targetKeyword,
  searchIntent,
  author,
  publishDate,
  featuredImage,
  alternativeText,
  excerpt,
  status
}`;

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Sample pages for building the template on a laptop. The import sits inside the check so the
 * production build drops it: the samples are not in the bundle and no address can reach them.
 */
async function fixtures(): Promise<SanityServicePage[]> {
  if (process.env.NODE_ENV !== 'production') {
    const mod = await import('@/fixtures/servicePages');
    return mod.SERVICE_PAGE_FIXTURES;
  }
  return [];
}

export async function getServicePage(slug: string): Promise<SanityServicePage | null> {
  if (isProduction) return client.fetch(SERVICE_PAGE_QUERY, { slug });
  let page: SanityServicePage | null = null;
  try {
    page = await client.fetch(SERVICE_PAGE_QUERY, { slug });
  } catch {
    page = null;
  }
  return page ?? (await fixtures()).find((f) => f.slug.current === slug) ?? null;
}

export async function getServicePageLinks(): Promise<ServicePageLink[]> {
  if (isProduction) return client.fetch(SERVICE_PAGE_LINKS_QUERY);
  let live: ServicePageLink[] = [];
  try {
    live = await client.fetch(SERVICE_PAGE_LINKS_QUERY);
  } catch {
    live = [];
  }
  const seen = new Set(live.map((l) => l.slug));
  const local = (await fixtures())
    .filter((f) => !seen.has(f.slug.current))
    .map((f) => ({ title: f.title, slug: f.slug.current, trade: f.trade, service: f.service }));
  return [...live, ...local];
}

/** "Roofing" -> "roof", so a post about roofers matches too. */
function stem(word: string): string {
  return word
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/(ing|ers|er|s)$/, '');
}

/** Up to three published posts about the same trade. None is fine: the block hides. */
export async function getRelatedPosts(trade: string): Promise<SanityBlogPost[]> {
  const root = stem(trade.split(/\s+/)[0] ?? '');
  if (root.length < 3) return [];
  try {
    return await client.fetch(RELATED_POSTS_QUERY, { words: `${root}*` });
  } catch (error) {
    if (isProduction) throw error;
    return [];
  }
}

/**
 * The URL of a page picture at the given width. `auto('format')` lets Sanity's CDN answer with
 * WebP or AVIF when the browser accepts it (measured 2026-11-24: the electrician hero went from a
 * 1,731 KB PNG to a 70 KB WebP); `fit('max')` never upscales a small original.
 */
export function pictureUrl(picture: ServicePagePicture | undefined, width: number): string | null {
  if (!picture) return null;
  if (picture.image) return urlFor(picture.image).width(width).fit('max').auto('format').url();
  return picture.path ?? null;
}

/** "Roofing" -> ["roof"], "Windows & Doors" -> ["window", "door"]: the word stems a post about that trade would carry. */
function tradeStems(trade: string): string[] {
  return trade
    .split(/[\s&/,]+/)
    .map(stem)
    .filter(
      (root) => root.length >= 3 && !['and', 'service', 'company', 'companie'].includes(root)
    );
}

/**
 * The published service pages about the trade a blog post covers, read off the post's title and
 * keyword the same way `getRelatedPosts` finds posts for a page: a word of the post starts with a
 * stem of the trade's name. None is fine: the block hides.
 */
export async function getServicePagesForPost(post: {
  title: string;
  targetKeyword?: string;
}): Promise<ServicePageLink[]> {
  const words = `${post.title} ${post.targetKeyword ?? ''}`
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean);
  const links = await getServicePageLinks();
  return links.filter((link) =>
    tradeStems(link.trade).some((root) => words.some((word) => word.startsWith(root)))
  );
}
