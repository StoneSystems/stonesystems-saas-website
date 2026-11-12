import { Container, Title, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { SanityBlogPost } from '@/lib/sanity';
import { SanityServicePage, ServicePageLink, servicePagePath } from '@/lib/servicePage';
import { SanityBlogCard } from '@/components/Blog/SanityBlogCard/SanityBlogCard';
import classes from './ServiceRelated.module.css';

interface Props {
  page: SanityServicePage;
  /** Other published service pages: the same trade first, then the same service. */
  siblings: ServicePageLink[];
  posts: SanityBlogPost[];
}

/** Results, the other services, the sister pages and the blog. Each block hides when it is empty. */
export function ServiceRelated({ page, siblings, posts }: Props) {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <div className={classes.results}>
          <div>
            <Title order={2} className={classes.resultsTitle}>
              Results from contractors like you
            </Title>
            <Text className={classes.resultsText}>
              Do not take our word for it. Watch what our clients say about working with us.
            </Text>
          </div>
          <a href="/results" className={classes.resultsLink}>
            See client results <IconArrowRight size={20} aria-hidden="true" />
          </a>
        </div>

        {page.relatedServices.length > 0 && (
          <>
            <Title order={2} className={classes.mainTitle}>
              What works with {page.trade.toLowerCase()} {page.service}
            </Title>
            <div className={classes.grid}>
              {page.relatedServices.map((service) => (
                <a href={service.path} className={classes.card} key={service.path}>
                  <span className={classes.cardLabel}>
                    {service.label}
                    <IconArrowRight size={20} aria-hidden="true" />
                  </span>
                  {service.text && <span className={classes.cardText}>{service.text}</span>}
                </a>
              ))}
            </div>
          </>
        )}

        {siblings.length > 0 && (
          <>
            <Title order={2} className={classes.subTitle}>
              More for your trade
            </Title>
            <ul className={classes.siblings}>
              {siblings.map((sibling) => (
                <li key={sibling.slug}>
                  <a href={servicePagePath(sibling.slug)}>
                    {sibling.trade} {sibling.service}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        {posts.length > 0 && (
          <>
            <Title order={2} className={classes.subTitle}>
              From the blog
            </Title>
            <div className={classes.posts}>
              {posts.map((post) => (
                <SanityBlogCard post={post} key={post._id} />
              ))}
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
