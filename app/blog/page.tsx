import { Metadata } from 'next';
import { BlogListing, fetchPublishedPosts } from '@/components/Blog/BlogListing/BlogListing';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Blog | Stone Systems - Marketing & Website Tips for Contractors',
  description:
    'Expert advice on contractor marketing, website design, reputation management, and business automation. Grow your home service business with Stone Systems.',
  openGraph: {
    title: 'Blog | Stone Systems',
    description: 'Expert contractor marketing tips and growth strategies.',
    url: 'https://stonesystems.io/blog',
    siteName: 'Stone Systems',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stonesystems.io/blog',
  },
};

/** Page 1 of the blog. Pages 2 and up live at `/blog/page/N`. */
export default async function BlogPage() {
  const posts = await fetchPublishedPosts();
  return <BlogListing posts={posts} page={1} />;
}
