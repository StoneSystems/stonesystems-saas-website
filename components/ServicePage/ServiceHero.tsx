import { Container, Title, Text, Button } from '@mantine/core';
import Image from 'next/image';
import { bookingUrl } from '@/lib/site';
import { SanityServicePage, pictureUrl } from '@/lib/servicePage';
import classes from './ServiceHero.module.css';

/** The widths the hero is offered at; the last one is the `src`. */
const HERO_WIDTHS = [600, 900, 1100] as const;
/** The hero column: full width under 62em (see ServiceHero.module.css), two fifths of the row above it. */
const HERO_SIZES = '(max-width: 62em) 100vw, 40vw';

const REVIEW_SITES = [
  { name: 'Google', logo: '/images/google.webp' },
  { name: 'Facebook', logo: '/images/facebook.png' },
  { name: 'Trustpilot', logo: '/images/trustpilot.png' },
];

export function ServiceHero({ page }: { page: SanityServicePage }) {
  const slug = page.slug.current;
  const picture = pictureUrl(page.hero.picture, HERO_WIDTHS[HERO_WIDTHS.length - 1]);
  // The real size reserves the right box before the picture arrives; the CSS forces 16 / 10 anyway.
  const { width, height } = page.heroDimensions ?? { width: 1100, height: 688 };
  const srcSet = page.hero.picture?.image
    ? HERO_WIDTHS.map((w) => `${pictureUrl(page.hero.picture, w)} ${w}w`).join(', ')
    : undefined;

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
              {/* A plain <img>, not next/image, so the picture survives a missing stylesheet. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={picture}
                srcSet={srcSet}
                sizes={srcSet ? HERO_SIZES : undefined}
                alt={page.hero.picture?.alt ?? ''}
                width={width}
                height={height}
                className={classes.picture}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
