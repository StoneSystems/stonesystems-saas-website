import { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { BlogListing, fetchPublishedPosts } from '@/components/Blog/BlogListing/BlogListing';
import { blogPageCount } from '@/components/Blog/blogPaging';

export const revalidate = 60;

interface PageProps {
  params: { page: string };
}

/** "2".."N" only: anything else is not a page. */
function parsePage(raw: string): number | null {
  if (!/^[1-9]\d{0,3}$/.test(raw)) return null;
  return Number(raw);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = parsePage(params.page);
  if (page === null || page < 2) return {};
  const title = `Blog, page ${page} | Stone Systems - Marketing & Website Tips for Contractors`;
  return {
    title,
    description: `Page ${page} of the Stone Systems blog: contractor marketing, website design, reputation management and business automation.`,
    openGraph: {
      title: `Blog, page ${page} | Stone Systems`,
      description: 'Expert contractor marketing tips and growth strategies.',
      url: `https://stonesystems.io/blog/page/${page}`,
      siteName: 'Stone Systems',
      type: 'website',
    },
    alternates: {
      canonical: `https://stonesystems.io/blog/page/${page}`,
    },
  };
}

/** `/blog/page/N` for N ≥ 2. `/blog/page/1` is `/blog`; a page past the end is a 404. */
export default async function BlogPageN({ params }: PageProps) {
  const page = parsePage(params.page);
  if (page === null) notFound();
  if (page === 1) permanentRedirect('/blog');
  const posts = await fetchPublishedPosts();
  if (page > blogPageCount(posts.length)) notFound();
  return <BlogListing posts={posts} page={page} />;
}
