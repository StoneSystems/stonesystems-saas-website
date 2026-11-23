import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Badge, Button, Group } from '@mantine/core';
import { IconExternalLink, IconArrowLeft, IconUser } from '@tabler/icons-react';
import { getPostBySlug } from '@/lib/markdown';
import blogs from '@/data/blogs.json';
import classes from './post.module.css';

interface PageProps {
  params: { slug: string };
}

// Layout-critical hero styles live inline so they cannot be lost with the stylesheet.
const heroStyle: CSSProperties = { position: 'relative', overflow: 'hidden' };
const coverStyle: CSSProperties = { position: 'absolute', inset: 0 };
const heroImageStyle: CSSProperties = { objectFit: 'cover', objectPosition: 'top' };
const heroOverlayStyle: CSSProperties = { ...coverStyle, background: 'rgba(31, 34, 54, 0.82)' };
const heroContentStyle: CSSProperties = { position: 'relative', zIndex: 2 };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Stone Systems Press`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function PressPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const blogEntry = blogs.find((b) => b.slug === params.slug);
  const imageUrl = blogEntry?.imageUrl ?? '';
  const externalUrl = blogEntry?.externalUrl ?? '';
  const author = (blogEntry as any)?.author ?? '';

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className={classes.page}>
      {/* The hero's containment is inline on purpose. The photo uses Next's `fill` mode,
          which positions it absolutely against the nearest positioned ancestor. If this
          page's stylesheet is ever late or missing, the photo must still be clipped to
          the hero and kept behind the text instead of covering the whole viewport. */}
      <div className={classes.hero} style={heroStyle}>
        {imageUrl ? (
          <div style={coverStyle}>
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              sizes="100vw"
              style={heroImageStyle}
              priority
            />
            <div style={heroOverlayStyle} />
          </div>
        ) : (
          <div className={classes.heroFallback} style={coverStyle} />
        )}
        <div className={classes.heroContent} style={heroContentStyle}>
          <Badge className={classes.badge}>{post.category}</Badge>
          {post.date && <p className={classes.date}>{formatDate(post.date)}</p>}
          <h1 className={classes.title}>{post.title}</h1>
          {post.excerpt && <p className={classes.excerpt}>{post.excerpt}</p>}
          <Group justify="center" gap="xl" className={classes.meta}>
            {post.source && (
              <p className={classes.source}>
                As featured in <strong>{post.source}</strong>
              </p>
            )}
            {author && (
              <Group gap={6} className={classes.authorGroup}>
                <IconUser size={15} className={classes.authorIcon} />
                <p className={classes.authorName}>By {author}</p>
              </Group>
            )}
          </Group>
        </div>
      </div>

      <div className={classes.container}>
        <a href="/press" className={classes.backLink}>
          <IconArrowLeft size={16} />
          Back to Press
        </a>

        {post.contentHtml.replace(/<[^>]*>/g, '').trim() ? (
          <div className={classes.content} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        ) : (
          <div className={classes.emptyState}>
            <p>Content coming soon.</p>
          </div>
        )}

        {externalUrl && (
          <div className={classes.originalLink}>
            <p className={classes.originalLabel}>Read the original article</p>
            <Button
              component="a"
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.originalButton}
              rightSection={<IconExternalLink size={18} />}
              size="lg"
            >
              View on {post.source || 'Original Source'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
