import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container, Title, Group, Badge, Text } from '@mantine/core';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { PortableText } from '@portabletext/react';
import { IconUser, IconCalendar, IconTarget } from '@tabler/icons-react';
import { client, SINGLE_POST_QUERY, ALL_SLUGS_QUERY, urlFor, SanityBlogPost } from '@/lib/sanity';
import classes from './post.module.css';

// Containment for the `fill` hero image lives inline so a late or missing stylesheet
// cannot let the photo escape its banner and cover the viewport.
const heroImageWrapperStyle: CSSProperties = { position: 'relative', overflow: 'hidden' };
const heroImageStyle: CSSProperties = { objectFit: 'cover', objectPosition: 'center' };

export const revalidate = 60;

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post: SanityBlogPost = await client.fetch(SINGLE_POST_QUERY, { slug: params.slug });
  if (!post) return { title: 'Post Not Found | Stone Systems' };

  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(1200).height(630).url()
    : undefined;

  return {
    title: post.metaTitle || `${post.title} | Stone Systems Blog`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://stonesystems.io/blog/${params.slug}`,
      siteName: 'Stone Systems',
      type: 'article',
      publishedTime: post.publishDate,
      authors: post.author ? [post.author] : undefined,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: post.alternativeText || post.title }]
        : undefined,
    },
    alternates: {
      canonical: `https://stonesystems.io/blog/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(ALL_SLUGS_QUERY);
  return slugs.map((s) => ({ slug: s.slug }));
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const url = urlFor(value).width(900).url();
      return (
        <div className={classes.contentImage}>
          <Image
            src={url}
            alt={value.alt || ''}
            width={900}
            height={500}
            style={{ objectFit: 'cover', borderRadius: 8 }}
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className={classes.link}>
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const post: SanityBlogPost = await client.fetch(SINGLE_POST_QUERY, { slug: params.slug });
  if (!post) notFound();

  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(1200).height(600).url()
    : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    author: { '@type': 'Person', name: post.author || 'Stone Systems' },
    datePublished: post.publishDate,
    image: imageUrl || undefined,
    url: `https://stonesystems.io/blog/${params.slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Stone Systems',
      logo: { '@type': 'ImageObject', url: 'https://stonesystems.io/images/newlogo.png' },
    },
    keywords: post.targetKeyword,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={classes.outer}>
        {/* Hero image */}
        {imageUrl && (
          <div className={classes.heroImageWrapper} style={heroImageWrapperStyle}>
            <Image
              src={imageUrl}
              alt={post.alternativeText || post.title}
              fill
              priority
              style={heroImageStyle}
            />
            <div className={classes.heroOverlay} />
          </div>
        )}

        <Container size="md" className={classes.container}>
          {/* Meta bar */}
          <div className={classes.metaBar}>
            {post.searchIntent && (
              <Badge className={classes.badge} variant="filled">
                {post.searchIntent}
              </Badge>
            )}
            {post.publishDate && (
              <Group gap={5}>
                <IconCalendar size={14} className={classes.metaIcon} />
                <Text className={classes.metaText}>{formatDate(post.publishDate)}</Text>
              </Group>
            )}
            {post.author && (
              <Group gap={5}>
                <IconUser size={14} className={classes.metaIcon} />
                <Text className={classes.metaText}>By {post.author}</Text>
              </Group>
            )}
            {post.targetKeyword && (
              <Group gap={5}>
                <IconTarget size={14} className={classes.metaIcon} />
                <Text className={classes.metaText}>{post.targetKeyword}</Text>
              </Group>
            )}
          </div>

          {/* Title */}
          <Title order={1} className={classes.title}>
            {post.title}
          </Title>

          {/* Excerpt */}
          {post.excerpt && <Text className={classes.excerpt}>{post.excerpt}</Text>}

          {/* Content */}
          {post.content && (
            <div className={classes.content}>
              <PortableText value={post.content} components={portableTextComponents} />
            </div>
          )}

          {/* Back link */}
          <div className={classes.backWrapper}>
            <a href="/blog" className={classes.backLink}>
              ← Back to Blog
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}
