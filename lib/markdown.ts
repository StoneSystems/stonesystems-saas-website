import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const pressDirectory = path.join(process.cwd(), 'content/press');

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  source: string;
}

export interface PostData extends PostFrontmatter {
  slug: string;
  contentHtml: string;
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const filePath = path.join(pressDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    contentHtml,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    category: data.category ?? '',
    source: data.source ?? '',
  };
}
