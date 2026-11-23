'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { TextInput, Group, Text, Button } from '@mantine/core';
import { IconSearch, IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react';
import { SanityBlogCard } from '@/components/Blog/SanityBlogCard/SanityBlogCard';
import { SanityBlogPost } from '@/lib/sanity';
import { BLOG_PAGE_SIZE, blogPageHref as pageHref } from '@/components/Blog/blogPaging';
import classes from './BlogGrid.module.css';

interface BlogGridProps {
  /** Every published post, newest first: the search box looks through all of them. */
  posts: SanityBlogPost[];
  /** Which nine to show when nobody is searching; comes from the address. */
  page: number;
}

/**
 * Nine cards per page, and the pager is made of real links (`/blog`, `/blog/page/2`, …), so each
 * page can be crawled, bookmarked and shared. A search runs in the browser over every post and
 * shows all of its matches at once; clearing it returns to the page of the address.
 */
export function BlogGrid({ posts, page }: BlogGridProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || '').toLowerCase().includes(q) ||
        (p.author || '').toLowerCase().includes(q) ||
        (p.targetKeyword || '').toLowerCase().includes(q)
    );
  }, [posts, query]);

  const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_PAGE_SIZE));
  const shown = filtered ?? posts.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);

  return (
    <>
      <div className={classes.searchRow}>
        <TextInput
          className={classes.searchInput}
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
          rightSection={
            query ? (
              <IconX size={16} className={classes.clearIcon} onClick={() => setQuery('')} />
            ) : null
          }
          size="md"
        />
        {filtered && (
          <Text className={classes.resultCount}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </Text>
        )}
      </div>

      {shown.length > 0 ? (
        <div className={classes.grid}>
          {shown.map((post) => (
            <SanityBlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className={classes.empty}>
          <Text>No articles found{query ? ` matching "${query}"` : ''}.</Text>
        </div>
      )}

      {!filtered && totalPages > 1 && (
        <Group
          justify="center"
          className={classes.pagination}
          component="nav"
          aria-label="Blog pages"
        >
          <Button
            component={Link}
            href={pageHref(page - 1)}
            variant="default"
            size="sm"
            leftSection={<IconChevronLeft size={16} />}
            disabled={page === 1}
            className={classes.pageBtn}
            aria-disabled={page === 1}
          >
            Prev
          </Button>
          <Group gap={6}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={pageHref(n)}
                aria-current={n === page ? 'page' : undefined}
                className={`${classes.pageNumber} ${n === page ? classes.pageNumberActive : ''}`}
              >
                {n}
              </Link>
            ))}
          </Group>
          <Button
            component={Link}
            href={pageHref(page + 1)}
            variant="default"
            size="sm"
            rightSection={<IconChevronRight size={16} />}
            disabled={page === totalPages}
            className={classes.pageBtn}
            aria-disabled={page === totalPages}
          >
            Next
          </Button>
        </Group>
      )}
    </>
  );
}
