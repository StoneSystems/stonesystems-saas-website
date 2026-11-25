import { Title, Text } from '@mantine/core';
import { SanityBlogPost } from '@/lib/sanity';
import classes from './AllArticles.module.css';

function monthLabel(dateStr?: string): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/**
 * Every published post as a plain text link, newest first. It renders on the server, so the full
 * list is in the HTML Google fetches: before this, only the nine cards of one page were, and the
 * other posts could only be reached through list pages Google had never crawled.
 */
export function AllArticles({ posts }: { posts: SanityBlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className={classes.section} aria-labelledby="all-articles">
      <Title order={2} id="all-articles" className={classes.title}>
        All articles
      </Title>
      <Text className={classes.text}>Every post on the blog, newest first.</Text>
      <ul className={classes.list}>
        {posts.map((post) => (
          <li key={post._id} className={classes.item}>
            <a href={`/blog/${post.slug.current}`} className={classes.link}>
              {post.title}
            </a>
            {post.publishDate && (
              <span className={classes.month}>{monthLabel(post.publishDate)}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
