'use client';

import { Paper, Text, Title, Container, SimpleGrid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import classes from './WhyChooseUsSection.module.css';

interface CardProps {
  cardTitle: string;
  cardDescription: string;
  imageSrc: string;
}

function Card({ cardTitle, cardDescription, imageSrc }: CardProps) {
  return (
    <Paper shadow="md" radius="md" className={classes.card}>
      <Image width={50} height={50} src={imageSrc} alt="Panda" className={classes.cardImg} />
      <Title order={3} className={classes.cardTitle}>
        {cardTitle}
      </Title>
      <Text
        className={classes.cardDescription}
        dangerouslySetInnerHTML={{ __html: cardDescription }}
      />
    </Paper>
  );
}

const data = [
  {
    cardTitle: 'Simple To Use',
    cardDescription:
      'We built Stone Systems with the core concept of being simple to use, so everything is made to be exactly that.',
    imageSrc: '/images/why/easy.png',
  },
  {
    cardTitle: 'Affordable',
    cardDescription:
      "Our prices are designed to keep you for 10 years, not 10 weeks. We're in it for the long haul.",
    imageSrc: '/images/why/low-price.png',
  },
  {
    cardTitle: 'No Contracts ',
    cardDescription:
      "If it's affordable & awesome, why would we need a contract... if you're happy, you'll stay.",
    imageSrc: '/images/why/documents.png',
  },
  {
    cardTitle: 'No Bullsh*t',
    cardDescription:
      "We don’t believe in the fluff, we just tell you exactly what we're going to do and we do it. Period.",
    imageSrc: '/images/why/poo.svg',
  },
  {
    cardTitle: 'We Have Proof',
    cardDescription:
      "We already know what's working and have all the <a href='/results'>reviews & testimonials</a> to back it up.",
    imageSrc: '/images/why/shield.svg',
  },
  {
    cardTitle: 'Constant Improvements',
    cardDescription:
      'We regularly make improvements and updates to our systems to make sure you get the best value for your money.',
    imageSrc: '/images/why/efficacy.png',
  },
];

export function WhyChooseUsSection() {
  const slides = data.map((item) => <Card key={item.cardTitle} {...item} />);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>
            Why we’re &quot;totally unique&quot;... <br /> just like everyone else, right?
          </Title>
          <Container size="lg">
            <SimpleGrid cols={mobile ? 1 : 3}>{slides}</SimpleGrid>
          </Container>
        </Container>
      </div>
    </>
  );
}
