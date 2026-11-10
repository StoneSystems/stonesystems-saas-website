'use client';

import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useMediaQuery } from '@mantine/hooks';
import { Title, Container, useMantineTheme } from '@mantine/core';
import { useRef } from 'react';
import Image from 'next/image';
import classes from './PartnersSection.module.css';

const data = [
  {
    imageSrc: '/images/partners/localfalcon.png',
  },
  {
    imageSrc: '/images/partners/meta.svg.png',
  },
  {
    imageSrc: '/images/partners/godaddy.png',
  },
  {
    imageSrc: '/images/partners/openai.webp',
  },
  {
    imageSrc: '/images/partners/gmb.webp',
  },
  {
    imageSrc: '/images/partners/canva.svg.png',
  },
  {
    imageSrc: '/images/partners/ahrefs.png',
  },
  {
    imageSrc: '/images/partners/googleanalytics.png',
  },
  {
    imageSrc: '/images/partners/mailgun.png',
  },
  {
    imageSrc: '/images/partners/semrush.png',
  },
  {
    imageSrc: '/images/partners/twilio.png',
  },
  {
    imageSrc: '/images/partners/zapier.svg.png',
  },
  {
    imageSrc: '/images/partners/ads.png',
  },
  {
    imageSrc: '/images/partners/googlesearch.png',
  },
  {
    imageSrc: '/images/partners/leadconnector.png',
  },
];

export function PartnersSection() {
  const autoplay = useRef(Autoplay({ delay: 2500 }));
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index} className={classes.slide}>
      <Image width={170} height={100} className={classes.image} src={item.imageSrc} alt="Panda" />
    </Carousel.Slide>
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>
            Just so you know we’re legit, <br /> we partner with…
          </Title>
          <div className={classes.card}>
            <Container size="lg">
              <Carousel
                slideSize={{ base: '50%', sm: '20%' }}
                slideGap={{ base: 'sm', sm: 'xl' }}
                align="start"
                loop
                dragFree
                slidesToScroll={mobile ? 2 : 5}
                plugins={[autoplay.current]}
                withControls={false}
              >
                {slides}
              </Carousel>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}
