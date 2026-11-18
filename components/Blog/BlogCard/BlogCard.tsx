import { Text, Badge, Group } from '@mantine/core';
import { IconArrowRight, IconNews, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './BlogCard.module.css';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  externalUrl: string;
  source: string;
  author?: string;
  category: string;
  date: string;
  featured: boolean;
  imageStyle?: {
    objectFit?: 'cover' | 'contain' | 'fill' | 'none';
    objectPosition?: string;
  };
}

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a
      href={`/press/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.card}
    >
      <div className={classes.imageWrapper}>
        {post.imageUrl ? (
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={classes.image}
            style={
              post.imageStyle
                ? {
                    objectFit: post.imageStyle.objectFit,
                    objectPosition: post.imageStyle.objectPosition,
                  }
                : undefined
            }
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
          <Badge className={classes.badge} variant="filled">
            {post.category}
          </Badge>
          {post.date && <Text className={classes.date}>{formatDate(post.date)}</Text>}
        </Group>

        <Text className={classes.title}>{post.title}</Text>

        {post.author && (
          <Group gap={5} className={classes.author}>
            <IconUser size={13} className={classes.authorIcon} />
            <Text className={classes.authorText}>By {post.author}</Text>
          </Group>
        )}

        {post.excerpt && <Text className={classes.excerpt}>{post.excerpt}</Text>}

        <div className={classes.footer}>
          {post.source && (
            <Group gap={5} className={classes.source}>
              <IconNews size={13} className={classes.sourceIcon} />
              <Text className={classes.sourceText}>{post.source}</Text>
            </Group>
          )}
          <Group className={classes.readMore} gap={6}>
            <Text className={classes.readMoreText}>Read Article</Text>
            <IconArrowRight size={16} className={classes.externalIcon} />
          </Group>
        </div>
      </div>
    </a>
  );
}
