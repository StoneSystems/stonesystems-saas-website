import { Container, Title, Text } from '@mantine/core';
import { ServicePageLink, servicePagePath } from '@/lib/servicePage';
import classes from './ServicePagesSection.module.css';

/** Every service page, grouped by trade, one click from /trades. Hidden until the first page is live. */
export function ServicePagesSection({ servicePages }: { servicePages: ServicePageLink[] }) {
  if (servicePages.length === 0) return null;

  const trades = Array.from(new Set(servicePages.map((page) => page.trade))).sort();

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title order={2} className={classes.mainTitle}>
          Marketing by trade
        </Title>
        <Text className={classes.description}>
          What we do for your trade, and how it gets you more calls.
        </Text>
        <div className={classes.grid}>
          {trades.map((trade) => (
            <div className={classes.group} key={trade}>
              <Title order={3} className={classes.trade}>
                {trade}
              </Title>
              <ul>
                {servicePages
                  .filter((page) => page.trade === trade)
                  .map((page) => (
                    <li key={page.slug}>
                      <a href={servicePagePath(page.slug)}>
                        {page.trade} {page.service}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
