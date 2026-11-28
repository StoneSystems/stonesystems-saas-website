export const dynamic = 'force-dynamic';

const SANITY_QUERY_URL = 'https://0797qc4z.api.sanity.io/v2024-01-01/data/query/production';

/**
 * The dataset is public, so a token is optional. Sending `Authorization: Bearer undefined` when
 * the variable is missing made Sanity answer 401 and the sitemap silently dropped every post and
 * service page (measured 2026-11-20: 0 of 57 posts, 0 of 6 pages). The header goes only when a
 * token is actually set, and a rejected token falls back to an anonymous read.
 */
function sanityHeaders() {
  const token = process.env.SANITY_API_TOKEN;
  return typeof token === 'string' && token.trim() !== '' ? { Authorization: `Bearer ${token}` } : {};
}

/** One query of the public dataset. `withToken` false sends no Authorization header at all. */
async function querySanity(type, withToken) {
  const query = encodeURIComponent(
    `*[_type == "${type}" && status == "Published" && defined(slug.current)] | order(publishDate desc) { "slug": slug.current, "updatedAt": _updatedAt }`
  );
  return fetch(`${SANITY_QUERY_URL}?query=${query}`, {
    headers: withToken ? sanityHeaders() : {},
    next: { revalidate: 60 },
  });
}

/**
 * Published documents of one type as `{ slug, updatedAt }`; `[]` on any failure, with the failure
 * logged. A token Sanity rejects (401/403) is retried without it: the dataset is public, so a stale
 * or wrong `SANITY_API_TOKEN` must not empty the sitemap either.
 */
async function getPublishedSlugs(type) {
  try {
    const hasToken = Object.keys(sanityHeaders()).length > 0;
    let res = await querySanity(type, hasToken);
    if (hasToken && (res.status === 401 || res.status === 403)) {
      console.error(`[sitemap] Sanity rejected SANITY_API_TOKEN for ${type} (HTTP ${res.status}); retrying without it`);
      res = await querySanity(type, false);
    }
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error(`[sitemap] Sanity ${type} query failed: HTTP ${res.status} ${body.slice(0, 200)}`);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data.result) ? data.result : [];
  } catch (err) {
    console.error(`[sitemap] Sanity ${type} query threw: ${err instanceof Error ? err.message : String(err)}`);
    return [];
  }
}

/** Nine posts per page of the blog list; `/blog` is page 1, the rest live at `/blog/page/N`. Keep equal to BLOG_PAGE_SIZE in components/Blog/blogPaging.ts. */
const BLOG_PAGE_SIZE = 9;
function blogListPages(postCount) {
  const total = Math.ceil(postCount / BLOG_PAGE_SIZE);
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => i + 2);
}

/** The latest `_updatedAt` among some posts, or undefined when there are none. */
function newestUpdatedAt(posts) {
  return posts.reduce(
    (newest, { updatedAt }) => (typeof updatedAt === 'string' && updatedAt > (newest ?? '') ? updatedAt : newest),
    undefined
  );
}

/**
 * The posts shown on page N of the blog list, in the order the list shows them (newest first), so
 * the page's lastmod is the newest change among the posts on it. A list page with a fresh date is
 * worth a crawl to Google; one with no date is not (measured 2026-11-25: all six list pages were
 * still unknown to Google after five days in the sitemap).
 */
function postsOnListPage(posts, page) {
  return posts.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);
}

/** `_updatedAt` is an ISO datetime; the sitemap protocol accepts the date alone. */
function lastmod(updatedAt) {
  if (typeof updatedAt !== 'string') return '';
  const day = updatedAt.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(day) ? `\n          <lastmod>${day}</lastmod>` : '';
}

export async function GET() {
  const baseUrl = 'https://stonesystems.io';

  const staticPages = [
    '',
    'results',
    'about-us',
    'trades',
    'careers',
    'app',
    'privacy-policy',
    'terms',
    'sms',
    'blog',
  ];

  const [blogSlugs, servicePageSlugs] = await Promise.all([
    getPublishedSlugs('blogPost'),
    getPublishedSlugs('servicePage'),
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <!-- ${blogSlugs.length} posts, ${servicePageSlugs.length} service pages -->
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}/${page}</loc>${page === 'blog' ? lastmod(newestUpdatedAt(blogSlugs)) : ''}
          <changefreq>${page === '' ? 'weekly' : page === 'blog' ? 'daily' : 'monthly'}</changefreq>
        </url>
      `
        )
        .join('')}
      ${blogListPages(blogSlugs.length)
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}/blog/page/${page}</loc>${lastmod(newestUpdatedAt(postsOnListPage(blogSlugs, page)))}
          <changefreq>daily</changefreq>
        </url>
      `
        )
        .join('')}
      ${blogSlugs
        .map(
          ({ slug, updatedAt }) => `
        <url>
          <loc>${baseUrl}/blog/${slug}</loc>${lastmod(updatedAt)}
          <changefreq>monthly</changefreq>
        </url>
      `
        )
        .join('')}
      ${servicePageSlugs
        .map(
          ({ slug, updatedAt }) => `
        <url>
          <loc>${baseUrl}/trades/${slug}</loc>${lastmod(updatedAt)}
          <changefreq>monthly</changefreq>
        </url>
      `
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Sitemap-Source': `${blogSlugs.length} posts, ${servicePageSlugs.length} service pages`,
    },
  });
}
