import { Title, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { SanityBlogPost } from '@/lib/sanity';
import { ServicePageLink, servicePagePath } from '@/lib/servicePageLinks';
import { SanityBlogCard } from '@/components/Blog/SanityBlogCard/SanityBlogCard';
import classes from './KeepReading.module.css';

interface Props {
  /** Up to three posts about the same things, picked by `pickRelatedPosts`. */
  posts: SanityBlogPost[];
  /** One or two service pages about the same trade or service. Empty hides the list. */
  servicePages: ServicePageLink[];
  /** The post published right after this one, and the one right before it. */
  newer: Pick<SanityBlogPost, 'title' | 'slug'> | null;
  older: Pick<SanityBlogPost, 'title' | 'slug'> | null;
}

/**
 * The links out of a post: related posts, the service pages they point to, and the posts on either
 * side in time. Server-rendered plain anchors, so every post is linked from at least two others
 * whatever its topic, and Google can follow them without running any script.
 */
export function KeepReading({ posts, servicePages, newer, older }: Props) {
  if (posts.length === 0 && servicePages.length === 0 && !newer && !older) return null;
  return (
    <section className={classes.outer} aria-labelledby="keep-reading">
      {posts.length > 0 && (
        <>
          <Title order={2} id="keep-reading" className={classes.title}>
            Keep reading
          </Title>
          <div className={classes.grid}>
            {posts.map((post) => (
              <SanityBlogCard post={post} key={post._id} />
            ))}
          </div>
        </>
      )}

      {servicePages.length > 0 && (
        <>
          <Text className={classes.subTitle}>What we do for this</Text>
          <ul className={classes.pages}>
            {servicePages.map((page) => (
              <li key={page.slug}>
                <a href={servicePagePath(page.slug)} className={classes.pageLink}>
                  {page.trade} {page.service}
                  <IconArrowRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {(newer || older) && (
        <nav className={classes.neighbours} aria-label="Newer and older posts">
          {older ? (
            <a href={`/blog/${older.slug.current}`} className={classes.neighbour}>
              <IconArrowLeft size={16} aria-hidden="true" />
              <span>
                <span className={classes.neighbourLabel}>Older post</span>
                {older.title}
              </span>
            </a>
          ) : (
            <span />
          )}
          {newer && (
            <a
              href={`/blog/${newer.slug.current}`}
              className={`${classes.neighbour} ${classes.neighbourNewer}`}
            >
              <span>
                <span className={classes.neighbourLabel}>Newer post</span>
                {newer.title}
              </span>
              <IconArrowRight size={16} aria-hidden="true" />
            </a>
          )}
        </nav>
      )}
    </section>
  );
}
