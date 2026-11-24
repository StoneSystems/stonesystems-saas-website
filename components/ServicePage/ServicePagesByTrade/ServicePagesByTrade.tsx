import { Container, Title, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { ServicePageLink, servicePagePath } from '@/lib/servicePageLinks';
import classes from './ServicePagesByTrade.module.css';

interface Props {
  heading: string;
  text?: string;
  pages: ServicePageLink[];
  /** `wide` sits on a feature page (Container lg); `narrow` sits inside a blog post (Container md). */
  width?: 'wide' | 'narrow';
}

/**
 * Links into the service pages under /trades, so the pages a service page links out to link back
 * to it. Built from the published pages: a new page shows up on its own. Nothing renders when the
 * list is empty.
 */
export function ServicePagesByTrade({ heading, text, pages, width = 'wide' }: Props) {
  if (pages.length === 0) return null;

  const list = (
    <ul className={classes.list}>
      {pages.map((page) => (
        <li key={page.slug}>
          <a href={servicePagePath(page.slug)} className={classes.link}>
            {page.trade} {page.service}
            <IconArrowRight size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );

  if (width === 'narrow') {
    return (
      <aside className={classes.narrow} aria-labelledby="service-pages-by-trade">
        <Title order={2} id="service-pages-by-trade" className={classes.narrowTitle}>
          {heading}
        </Title>
        {text && <Text className={classes.narrowText}>{text}</Text>}
        {list}
      </aside>
    );
  }

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title order={2} className={classes.mainTitle}>
          {heading}
        </Title>
        {text && <Text className={classes.description}>{text}</Text>}
        {list}
      </Container>
    </div>
  );
}
