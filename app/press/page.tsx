import { Metadata } from 'next';
import { BlogPost } from '@/components/Blog/BlogCard/BlogCard';
import { PressGrid } from '@/components/Blog/PressGrid/PressGrid';
import blogs from '@/data/blogs.json';
import classes from './press.module.css';

export const metadata: Metadata = {
  title: 'Press | Stone Systems',
  description:
    'Stone Systems in the news. Read the latest press coverage, interviews, and features about Kai Stone and StoneSystems.io.',
};

export default function PressPage() {
  const allPosts = blogs as BlogPost[];

  return (
    <div className={classes.page}>
      <div className={classes.hero}>
        <div className={classes.heroInner}>
          <p className={classes.eyebrow}>Media & Press</p>
          <h1 className={classes.title}>Stone Systems in the Press</h1>
          <p className={classes.subtitle}>
            Read the latest features, interviews, and coverage of Kai Stone and StoneSystems.io
            across top publications.
          </p>
        </div>
      </div>

      <div className={classes.content}>
        <PressGrid posts={allPosts} />
      </div>
    </div>
  );
}
