'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Title, useMantineTheme, Container, AspectRatio, Button } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Image from 'next/image';
import classes from './WhoWeServeSection.module.css';

interface CardProps {
  tradeName: string;
  imageSrc: string;
  tradeName2: string;
  imageSrc2: string;
}

function Card({ tradeName, imageSrc, tradeName2, imageSrc2 }: CardProps) {
  return (
    <>
      <Paper mb="var(--space-40" className={classes.card}>
        <AspectRatio ratio={16 / 9} className={classes.video}>
          <Image width={245} height={200} src={imageSrc} alt={tradeName} />
        </AspectRatio>
        <Title pt="sm" mx="auto" order={3} className={classes.tradeName}>
          {tradeName}
        </Title>
      </Paper>

      <Paper mb="var(--space-40" className={classes.card}>
        <AspectRatio ratio={16 / 9} className={classes.video}>
          <Image width={245} height={200} src={imageSrc2} alt={tradeName} />
        </AspectRatio>
        <Title pt="sm" mx="auto" order={3} className={classes.tradeName}>
          {tradeName2}
        </Title>
      </Paper>
    </>
  );
}

const data = [
  {
    tradeName: 'Landscapers',
    imageSrc: '/images/trades/landscapers.png',
    tradeName2: 'Remodeling',
    imageSrc2: '/images/trades/remodeling.png',
  },
  {
    tradeName: 'Pressure Washer',
    imageSrc: '/images/trades/pressure.png',
    tradeName2: 'Pest Control',
    imageSrc2: '/images/trades/pest.png',
  },
  {
    tradeName: 'Moving Companies',
    imageSrc: '/images/trades/moving.png',
    tradeName2: 'Flooring & Carpet Cleaning',
    imageSrc2: '/images/trades/carpet.png',
  },
  {
    tradeName: 'Roofing',
    imageSrc: '/images/trades/roofing.png',
    tradeName2: 'HVAC',
    imageSrc2: '/images/trades/hvac.png',
  },
  {
    tradeName: 'Plumbing',
    imageSrc: '/images/trades/plumbing.png',
    tradeName2: 'Electrician',
    imageSrc2: '/images/trades/electrician.png',
  },
  {
    tradeName: 'Handyman',
    imageSrc: '/images/trades/handyman.png',
    tradeName2: 'Painters',
    imageSrc2: '/images/trades/painters.png',
  },
  {
    tradeName: 'Decks & Patios',
    imageSrc: '/images/trades/decksandpatios.png',
    tradeName2: 'Siding',
    imageSrc2: '/images/trades/siding.png',
  },
  {
    tradeName: 'Pool Construction',
    imageSrc: '/images/trades/poolbuilders.png',
    tradeName2: 'Paving',
    imageSrc2: '/images/trades/paving.png',
  },
  {
    tradeName: 'Hardscaping',
    imageSrc: '/images/trades/hardscaping.png',
    tradeName2: 'Windows & Doors',
    imageSrc2: '/images/trades/windowsanddoors.png',
  },
  {
    tradeName: 'General Contractors',
    imageSrc: '/images/trades/generalcontractor.png',
    tradeName2: 'Dog Groomers',
    imageSrc2: '/images/trades/doggroomer.png',
  },
  {
    tradeName: 'Tree Service',
    imageSrc: '/images/trades/tree.png',
    tradeName2: 'Home Builders',
    imageSrc2: '/images/trades/homebuilders.png',
  },
];

export function WhoWeServeSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.tradeName}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container size="xl">
          <Title className={classes.mainTitle}>Serving all these trades and more...</Title>
          <div className={classes.card}>
            <Container size="xl">
              <Carousel
                slideSize={{ base: '33.33%', sm: '33.33%' }}
                slideGap={{ base: 'xl', sm: 'xl' }}
                align="start"
                loop
                dragFree
                slidesToScroll={mobile ? 1 : 3}
                plugins={[autoplay.current]}
                classNames={{
                  control: classes.control,
                  controls: classes.controls,
                  root: classes.root,
                }}
              >
                {slides}
              </Carousel>
            </Container>
            <Button
              component="a"
              href="/trades"
              mx="auto"
              bg="var(--yellow)"
              size={mobile ? 'lg' : 'xl'}
              className={classes.button}
            >
              See All Trades We Work With
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
