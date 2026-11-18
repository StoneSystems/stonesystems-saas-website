import { Title, Container, Button, Group } from '@mantine/core';
import { BlogCard, BlogPost } from '@/components/Blog/BlogCard/BlogCard';
import blogs from '@/data/blogs.json';
import classes from './BlogSection.module.css';

export function BlogSection() {
  const featuredPosts = (blogs as BlogPost[]).filter((post) => post.featured).slice(0, 4);

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Group justify="space-between" align="flex-end" className={classes.header}>
          <div>
            <Title className={classes.eyebrow}>In The News</Title>
            <Title order={2} className={classes.mainTitle}>
              Stone Systems in the Press
            </Title>
          </div>
          <Button
            component="a"
            href="/press"
            className={classes.viewAll}
            variant="outline"
            size="md"
          >
            View All Press
          </Button>
        </Group>

        <div className={classes.grid}>
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
}
