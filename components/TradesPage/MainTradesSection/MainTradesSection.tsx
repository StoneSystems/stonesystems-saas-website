'use client';

import { useMediaQuery } from '@mantine/hooks';
import {
  Paper,
  Title,
  useMantineTheme,
  Container,
  SimpleGrid,
  Button,
  Center,
} from '@mantine/core';
import Image from 'next/image';
import { bookingUrl } from '@/lib/site';
import { ServicePageLink, groupByTrade, servicePagePath } from '@/lib/servicePageLinks';
import classes from './MainTradesSection.module.css';

interface CardProps {
  tradeName: string;
  imageSrc: string;
  /** The service pages written for this trade. Most trades have none yet. */
  pages?: ServicePageLink[];
}

function Card({ tradeName, imageSrc, pages = [] }: CardProps) {
  return (
    <Paper radius="md" className={classes.card}>
      <Image width={329} height={185} src={imageSrc} alt={tradeName} className={classes.video} />
      <Title order={3} className={classes.tradeName}>
        {tradeName}
      </Title>
      {pages.length > 0 && (
        <ul className={classes.pageLinks}>
          {pages.map((page) => (
            <li key={page.slug}>
              <a href={servicePagePath(page.slug)}>
                {page.trade} {page.service}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Paper>
  );
}

const data = [
  {
    tradeName: 'Landscapers',
    imageSrc: '/images/trades/landscapers.png',
  },
  {
    tradeName: 'Remodeling',
    imageSrc: '/images/trades/remodeling.png',
  },
  {
    tradeName: 'Pressure Washer',
    imageSrc: '/images/trades/pressure.png',
  },
  {
    tradeName: 'Dog Groomers',
    imageSrc: '/images/trades/doggroomer.png',
  },
  {
    tradeName: 'Moving Companies',
    imageSrc: '/images/trades/moving.png',
  },
  {
    tradeName: 'Floor & Carpet Cleaning',
    imageSrc: '/images/trades/carpet.png',
  },
  {
    tradeName: 'Roofing',
    imageSrc: '/images/trades/roofing.png',
  },
  {
    tradeName: 'HVAC',
    imageSrc: '/images/trades/hvac.png',
  },
  {
    tradeName: 'Plumbing',
    imageSrc: '/images/trades/plumbing.png',
  },
  {
    tradeName: 'Electrician',
    imageSrc: '/images/trades/electrician.png',
  },
  {
    tradeName: 'Handyman',
    imageSrc: '/images/trades/handyman.png',
  },
  {
    tradeName: 'Painters',
    imageSrc: '/images/trades/painters.png',
  },
  {
    tradeName: 'Decks & Patios',
    imageSrc: '/images/trades/decksandpatios.png',
  },
  {
    tradeName: 'Siding',
    imageSrc: '/images/trades/siding.png',
  },
  {
    tradeName: 'Pool Construction',
    imageSrc: '/images/trades/poolbuilders.png',
  },
  {
    tradeName: 'Paving',
    imageSrc: '/images/trades/paving.png',
  },
  {
    tradeName: 'Hardscaping',
    imageSrc: '/images/trades/hardscaping.png',
  },
  {
    tradeName: 'Windows & Doors',
    imageSrc: '/images/trades/windowsanddoors.png',
  },
  {
    tradeName: 'General Contractors',
    imageSrc: '/images/trades/generalcontractor.png',
  },
  {
    tradeName: 'Pest Control',
    imageSrc: '/images/trades/pest.png',
  },
  {
    tradeName: 'Tree Service',
    imageSrc: '/images/trades/tree.png',
  },
];

/** A card named "Roofing" shows the pages whose trade is "Roofing". */
function pagesFor(
  tradeName: string,
  byTrade: Record<string, ServicePageLink[]>
): ServicePageLink[] {
  return byTrade[tradeName.trim().toLowerCase()] ?? [];
}

export function MainTradesSection({ servicePages = [] }: { servicePages?: ServicePageLink[] }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const byTrade = groupByTrade(servicePages);
  const slides = data.map((item) => (
    <Card key={item.tradeName} {...item} pages={pagesFor(item.tradeName, byTrade)} />
  ));

  return (
    <div className={classes.outer}>
      <Title className={classes.mainTitle}>Serving all these trades and more...</Title>
      <Center className={classes.topCta}>
        <Button
          component="a"
          href={bookingUrl('trades-top')}
          target="_blank"
          rel="noopener noreferrer"
          size="xl"
          className={classes.topCtaButton}
        >
          Book A Call
        </Button>
      </Center>
      <Container size="lg">
        <SimpleGrid cols={mobile ? 1 : 3}>{slides}</SimpleGrid>
      </Container>
    </div>
  );
}
