/**
 * How the blog list is cut into pages. A plain module on purpose: a value imported from a
 * 'use client' file into a server component arrives as a client reference, not a number.
 * `app/sitemap.xml/route.js` keeps its own copy of the page size.
 */
export const BLOG_PAGE_SIZE = 9;

/** `/blog` is page 1; every later page lives at `/blog/page/N`. */
export function blogPageHref(page: number): string {
  return page <= 1 ? '/blog' : `/blog/page/${page}`;
}

export function blogPageCount(postCount: number): number {
  return Math.max(1, Math.ceil(postCount / BLOG_PAGE_SIZE));
}
