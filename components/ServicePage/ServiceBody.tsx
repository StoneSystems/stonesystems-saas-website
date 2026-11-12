import React from 'react';
import { Container, Title, Text, Button } from '@mantine/core';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import { bookingUrl } from '@/lib/site';
import { SanityServicePage } from '@/lib/servicePage';
import classes from './ServiceBody.module.css';

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className={classes.contentImage}>
        <Image
          src={urlFor(value).width(900).url()}
          alt={value.alt || ''}
          width={900}
          height={500}
          style={{ objectFit: 'cover', borderRadius: 8, width: '100%', height: 'auto' }}
        />
      </div>
    ),
  },
  marks: {
    // A link to this site stays in the tab; a link to a source opens a new one.
    link: ({ children, value }: any) => {
      const href: string = value?.href ?? '#';
      const inside = href.startsWith('/') || href.startsWith('https://stonesystems.io');
      return inside ? (
        <a href={href} className={classes.link}>
          {children}
        </a>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes.link}>
          {children}
        </a>
      );
    },
  },
};

/** After this many body sections the page asks for the call once more. */
const CTA_AFTER_SECTION = 2;

export function ServiceBody({ page }: { page: SanityServicePage }) {
  const slug = page.slug.current;

  return (
    <div className={classes.outer}>
      <Container size="md">
        {page.sections.map((section, index) => (
          <React.Fragment key={section.heading}>
            <section className={classes.section}>
              <Title order={2} className={classes.heading}>
                {section.heading}
              </Title>
              <div className={classes.content}>
                <PortableText value={section.body} components={portableTextComponents} />
              </div>
            </section>

            {index + 1 === CTA_AFTER_SECTION && page.sections.length > CTA_AFTER_SECTION && (
              <aside className={classes.cta}>
                <div>
                  <Text className={classes.ctaTitle}>
                    Want to see what Google sees when it looks at your company?
                  </Text>
                  <Text className={classes.ctaText}>
                    Twenty minutes. We open your website and your Google profile with you.
                  </Text>
                </div>
                <Button
                  component="a"
                  href={bookingUrl(`trades-${slug}-mid`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className={classes.control}
                >
                  Book A Call
                </Button>
              </aside>
            )}
          </React.Fragment>
        ))}
      </Container>
    </div>
  );
}
