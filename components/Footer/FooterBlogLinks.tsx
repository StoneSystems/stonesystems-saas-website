import { Text } from '@mantine/core';
import { client, SanityBlogPost } from '@/lib/sanity';
import classes from './Footer.module.css';

type LatestPost = Pick<SanityBlogPost, '_id' | 'title' | 'slug'>;

const LATEST_POSTS_QUERY = `*[_type == "blogPost" && status == "Published"] | order(publishDate desc)[0...5] {
  _id,
  title,
  slug
}`;

/**
 * The footer's Blog column: the blog itself and the five newest posts, read on the server and
 * cached for a minute like the blog pages. Not every post: the full list lives on /blog, and a
 * sitewide link to all of them would say nothing about which ones matter.
 */
export async function FooterBlogLinks() {
  let posts: LatestPost[] = [];
  try {
    posts = await client.fetch(LATEST_POSTS_QUERY, {}, { next: { revalidate: 60 } });
  } catch {
    posts = [];
  }
  return (
    <div className={classes.wrapper}>
      <Text className={classes.title}>Blog</Text>
      <Text className={classes.link} component="a" mb="1rem" href="/blog">
        All articles
      </Text>
      {posts.map((post) => (
        <Text
          key={post._id}
          className={classes.link}
          component="a"
          mb="1rem"
          href={`/blog/${post.slug.current}`}
        >
          {post.title}
        </Text>
      ))}
    </div>
  );
}
