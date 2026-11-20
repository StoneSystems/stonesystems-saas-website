import { Container, Title } from '@mantine/core';
import { client, ALL_POSTS_QUERY, SanityBlogPost } from '@/lib/sanity';
import { BlogGrid } from '@/components/Blog/BlogGrid/BlogGrid';
import classes from '@/app/blog/blog.module.css';

export async function fetchPublishedPosts(): Promise<SanityBlogPost[]> {
  return client.fetch(ALL_POSTS_QUERY);
}

/**
 * The blog list: hero plus one page of cards. Each page has its own address and real links to
 * the others, so Google (and a reader with a bookmark) can reach every post from the list; the
 * old list changed pages in the browser only, and only the first nine posts were ever linked.
 */
export function BlogListing({ posts, page }: { posts: SanityBlogPost[]; page: number }) {
  return (
    <div className={classes.outer}>
      <div className={classes.hero}>
        <Container size="lg">
          <p className={classes.eyebrow}>Resources &amp; Insights</p>
          <Title order={1} className={classes.heroTitle}>
            The Stone Systems Blog
          </Title>
          <p className={classes.heroSub}>
            Marketing strategies, website tips, and growth playbooks built specifically for
            contractors and home service businesses.
          </p>
        </Container>
      </div>

      <Container size="lg" className={classes.content}>
        {posts.length === 0 ? (
          <div className={classes.empty}>
            <Title order={3}>No posts yet — check back soon!</Title>
          </div>
        ) : (
          <BlogGrid posts={posts} page={page} />
        )}
      </Container>
    </div>
  );
}
