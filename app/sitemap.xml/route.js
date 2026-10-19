export const dynamic = 'force-dynamic';

async function getBlogSlugs() {
  try {
    const query = encodeURIComponent('*[_type == "blogPost" && status == "Published"] { "slug": slug.current }');
    const res = await fetch(
      `https://0797qc4z.api.sanity.io/v2024-01-01/data/query/production?query=${query}`,
      {
        headers: { Authorization: `Bearer ${process.env.SANITY_API_TOKEN}` },
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.result || [];
  } catch {
    return [];
  }
}

export async function GET() {
  const baseUrl = 'https://stonesystems.io';

  const staticPages = [
    '',
    'pricing',
    'testimonials',
    'our-work',
    'about-us',
    'our-process',
    'trades-we-serve',
    'careers',
    'partners',
    'contact',
    'privacy-policy',
    'terms',
    'sms',
    'blog',
  ];

  const blogSlugs = await getBlogSlugs();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}/${page}</loc>
          <changefreq>${page === '' ? 'weekly' : page === 'blog' ? 'daily' : 'monthly'}</changefreq>
        </url>
      `
        )
        .join('')}
      ${blogSlugs
        .map(
          ({ slug }) => `
        <url>
          <loc>${baseUrl}/blog/${slug}</loc>
          <changefreq>monthly</changefreq>
        </url>
      `
        )
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
