import { Text, Badge, Group } from '@mantine/core';
import { IconArrowRight, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { SanityBlogPost, urlFor } from '@/lib/sanity';
import classes from './SanityBlogCard.module.css';

interface SanityBlogCardProps {
  post: SanityBlogPost;
}

// Containment for the `fill` image lives inline so a late or missing stylesheet cannot
// let the photo escape the card and cover the viewport.
const imageWrapperStyle: CSSProperties = { position: 'relative', overflow: 'hidden' };
const imageStyle: CSSProperties = { objectFit: 'cover', objectPosition: 'center' };

function formatDate(dateStr?: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function SanityBlogCard({ post }: SanityBlogCardProps) {
  const imageUrl = post.featuredImage
    ? urlFor(post.featuredImage).width(600).height(400).url()
    : null;

  return (
    <Link href={`/blog/${post.slug.current}`} className={classes.card}>
      <div className={classes.imageWrapper} style={imageWrapperStyle}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={post.alternativeText || post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={imageStyle}
          />
        ) : (
          <div className={classes.imageFallback}>
            <Image
              src="/images/newlogo.png"
              alt="Stone Systems"
              width={140}
              height={57}
              className={classes.fallbackLogo}
            />
          </div>
        )}
      </div>

      <div className={classes.body}>
        <Group justify="space-between" mb="xs" wrap="nowrap">
          {post.searchIntent && (
            <Badge className={classes.badge} variant="filled">
              {post.searchIntent}
            </Badge>
          )}
          {post.publishDate && <Text className={classes.date}>{formatDate(post.publishDate)}</Text>}
        </Group>

        <Text className={classes.title}>{post.title}</Text>

        {post.author && (
          <Group gap={5} className={classes.author}>
            <IconUser size={13} className={classes.authorIcon} />
            <Text className={classes.authorText}>By {post.author}</Text>
          </Group>
        )}

        {post.excerpt && (
          <Text className={classes.excerpt} lineClamp={3}>
            {post.excerpt}
          </Text>
        )}

        <div className={classes.footer}>
          <Group className={classes.readMore} gap={6}>
            <Text className={classes.readMoreText}>Read Article</Text>
            <IconArrowRight size={16} className={classes.arrowIcon} />
          </Group>
        </div>
      </div>
    </Link>
  );
}
