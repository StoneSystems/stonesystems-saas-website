import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: '0797qc4z',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  targetKeyword?: string;
  searchIntent?: string;
  author?: string;
  publishDate?: string;
  featuredImage?: SanityImageSource;
  alternativeText?: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt?: string;
  content?: any[];
  status: 'Draft' | 'Published';
}

export const ALL_POSTS_QUERY = `*[_type == "blogPost" && status == "Published"] | order(publishDate desc) {
  _id,
  title,
  slug,
  targetKeyword,
  searchIntent,
  author,
  publishDate,
  featuredImage,
  alternativeText,
  metaTitle,
  metaDescription,
  excerpt,
  status
}`;

export const SINGLE_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug && status == "Published"][0] {
  _id,
  title,
  slug,
  targetKeyword,
  searchIntent,
  author,
  publishDate,
  featuredImage,
  alternativeText,
  metaTitle,
  metaDescription,
  excerpt,
  content,
  status
}`;

export const ALL_SLUGS_QUERY =
  '*[_type == "blogPost" && status == "Published"] { "slug": slug.current }';
