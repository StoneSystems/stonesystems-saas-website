import { Container, Title, Text, Button } from '@mantine/core';
import Image from 'next/image';
import { bookingUrl } from '@/lib/site';
import { SanityServicePage, pictureUrl } from '@/lib/servicePage';
import classes from './ServiceHero.module.css';

const REVIEW_SITES = [
  { name: 'Google', logo: '/images/google.webp' },
  { name: 'Facebook', logo: '/images/facebook.png' },
  { name: 'Trustpilot', logo: '/images/trustpilot.png' },
];

export function ServiceHero({ page }: { page: SanityServicePage }) {
  const slug = page.slug.current;
  const picture = pictureUrl(page.hero.picture, 1100);

  return (
    <div className={classes.outer}>
      <Container size="xl">
        <nav aria-label="Breadcrumb" className={classes.breadcrumb}>
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/trades">Trades</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">
            {page.trade} {page.service}
          </span>
        </nav>

        <div className={classes.inner}>
          <div className={classes.content}>
            <Text className={classes.eyebrow}>
              {page.trade} · {page.service}
            </Text>
            <Title order={1} className={classes.title}>
              {page.title}
            </Title>
            <Text className={classes.description}>{page.hero.subheading}</Text>

            <div className={classes.actions}>
              <Button
                component="a"
                href={bookingUrl(`trades-${slug}-hero`)}
                target="_blank"
                rel="noopener noreferrer"
                size="xl"
                className={classes.control}
              >
                Book A Call
              </Button>
              <a href="/results" className={classes.secondary}>
                See client results →
              </a>
            </div>

            <div className={classes.credits}>
              {REVIEW_SITES.map((site) => (
                <div className={classes.credit} key={site.name}>
                  <Image width={36} height={36} alt={`${site.name} logo`} src={site.logo} />
                  <div>
                    <Text className={classes.creditTitle}>{site.name}</Text>
                    <div className={classes.stars} aria-label="Five stars">
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Image key={star} width={16} height={16} alt="" src="/images/star.png" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {picture && (
            <div className={classes.pictureFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={picture}
                alt={page.hero.picture?.alt ?? ''}
                className={classes.picture}
                loading="eager"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
