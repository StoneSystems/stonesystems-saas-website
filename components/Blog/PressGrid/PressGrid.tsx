'use client';

import { useState, useMemo } from 'react';
import { TextInput, Group, Text, Button } from '@mantine/core';
import { IconSearch, IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react';
import { BlogCard, BlogPost } from '@/components/Blog/BlogCard/BlogCard';
import classes from './PressGrid.module.css';

const PAGE_SIZE = 9;

interface PressGridProps {
  posts: BlogPost[];
}

export function PressGrid({ posts }: PressGridProps) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.source.toLowerCase().includes(q)
    );
  }, [posts, query]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSearch = (val: string) => {
    setQuery(val);
    setPage(1);
  };

  return (
    <>
      <div className={classes.searchRow}>
        <TextInput
          className={classes.searchInput}
          placeholder="Search by title, source..."
          value={query}
          onChange={(e) => handleSearch(e.currentTarget.value)}
          leftSection={<IconSearch size={16} />}
          rightSection={
            query ? (
              <IconX size={16} className={classes.clearIcon} onClick={() => handleSearch('')} />
            ) : null
          }
          size="md"
        />
        {query && (
          <Text className={classes.resultCount}>
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </Text>
        )}
      </div>

      {paginated.length > 0 ? (
        <div className={classes.grid}>
          {paginated.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className={classes.empty}>
          <Text>No press articles found matching &ldquo;{query}&rdquo;.</Text>
        </div>
      )}

      {totalPages > 1 && (
        <Group justify="center" className={classes.pagination}>
          <Button
            variant="default"
            size="sm"
            leftSection={<IconChevronLeft size={16} />}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={classes.pageBtn}
          >
            Prev
          </Button>

          <Group gap={6}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                type="button"
                key={n}
                onClick={() => setPage(n)}
                className={`${classes.pageNumber} ${n === page ? classes.pageNumberActive : ''}`}
              >
                {n}
              </button>
            ))}
          </Group>

          <Button
            variant="default"
            size="sm"
            rightSection={<IconChevronRight size={16} />}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={classes.pageBtn}
          >
            Next
          </Button>
        </Group>
      )}
    </>
  );
}
