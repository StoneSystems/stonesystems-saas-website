'use client';

import { Text, Paper, Container, SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import classes from './EmployeeSection.module.css';

interface CardProps {
  name: string;
  title: string;
  imageSrc: string;
}

function Card({ name, title, imageSrc }: CardProps) {
  return (
    <Paper py="lg" radius="md" bg="var(--white)">
      <Image className={classes.avatar} src={imageSrc} width={200} height={200} alt={name} />
      <Text className={classes.name} ta="center" mt="md">
        {name}
      </Text>
      <Text className={classes.jobTitle} ta="center" c="dimmed">
        {title}
      </Text>
    </Paper>
  );
}

// NOTE: People marked with placeholder.jpg need headshots uploaded to /public/images/people/
const data = [
  // ── Executive ──────────────────────────────────────────────────────────────
  {
    name: 'Kai',
    title: 'CEO / Founder',
    imageSrc: '/images/people/kai.jpeg',
  },
  {
    name: 'Michael',
    title: 'COO / Co-Founder',
    imageSrc: '/images/people/michael.jpg',
  },
  {
    name: 'Chelsea',
    title: 'Executive Assistant',
    imageSrc: '/images/people/chelsea.jpg', // NEEDS HEADSHOT
  },

  // ── Engineering ────────────────────────────────────────────────────────────
  {
    name: 'Umer',
    title: 'Senior Software Engineer',
    imageSrc: '/images/people/umer.jpg',
  },
  {
    name: 'Hussain',
    title: 'Software Engineer',
    imageSrc: '/images/people/hussain.jpg', // NEEDS HEADSHOT
  },
  {
    name: 'Shahzeb',
    title: 'Software Engineer',
    imageSrc: '/images/people/shahzeb.jpg', // NEEDS HEADSHOT
  },

  // ── Customer Success ───────────────────────────────────────────────────────
  {
    name: 'Eric',
    title: 'Head of Customer Success',
    imageSrc: '/images/people/eric.jpg', // NEEDS HEADSHOT
  },
  {
    name: 'Ryan',
    title: 'CSM Team Lead',
    imageSrc: '/images/people/ryan.jpeg',
  },
  {
    name: 'Ben',
    title: 'CSM Team Lead',
    imageSrc: '/images/people/ben.jpeg',
  },
  {
    name: 'Fabio',
    title: 'GMB Expert',
    imageSrc: '/images/people/fabio.png',
  },
  {
    name: 'Henry',
    title: 'GMB Expert',
    imageSrc: '/images/people/henry.jpeg',
  },

  // ── Sales ──────────────────────────────────────────────────────────────────
  {
    name: 'Dale',
    title: 'Sales Manager',
    imageSrc: '/images/people/dale.jpeg',
  },
  {
    name: 'Jay',
    title: 'Closer',
    imageSrc: '/images/people/jhovany.png',
  },
  {
    name: 'Daniel',
    title: 'Closer',
    imageSrc: '/images/people/daniel.jpeg',
  },
  {
    name: 'Martin',
    title: 'Closer',
    imageSrc: '/images/people/martin.jpg', // NEEDS HEADSHOT
  },
  {
    name: 'Carlos',
    title: 'Closer',
    imageSrc: '/images/people/carlos.jpg', // NEEDS HEADSHOT
  },
  {
    name: 'Alex',
    title: 'Closer',
    imageSrc: '/images/people/alex.jpg', // NEEDS HEADSHOT
  },
  {
    name: 'Juan',
    title: 'Setter',
    imageSrc: '/images/people/juan_saldivar.jpg',
  },
  {
    name: 'Natalia',
    title: 'Setter',
    imageSrc: '/images/people/natalia.jpg', // NEEDS HEADSHOT
  },

  // ── Service Delivery ───────────────────────────────────────────────────────
  {
    name: 'Astrid',
    title: 'VA Team Lead',
    imageSrc: '/images/people/astrid.jpeg',
  },
  {
    name: 'Alejandra',
    title: 'Web Developer',
    imageSrc: '/images/people/alejandra.jpeg',
  },
  {
    name: 'Camila',
    title: 'Web Developer',
    imageSrc: '/images/people/camila.jpeg',
  },
  {
    name: 'Oriana',
    title: 'Web Developer',
    imageSrc: '/images/people/oriana.jpg', // NEEDS HEADSHOT
  },
  {
    name: 'Saray',
    title: 'Web Developer',
    imageSrc: '/images/people/saray.jpg', // NEEDS HEADSHOT
  },
  {
    name: 'Victor',
    title: 'Web Developer',
    imageSrc: '/images/people/victor.jpg', // NEEDS HEADSHOT
  },

  // ── HR ─────────────────────────────────────────────────────────────────────
  {
    name: 'Laura',
    title: 'HR / Recruiter',
    imageSrc: '/images/people/laura.jpg', // NEEDS HEADSHOT
  },

  // ── Customer Success (continued) ─────────────────────────────────────────
  {
    name: 'Andres',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/andres.jpg',
  },
  {
    name: 'Charlie',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/charlie.jpg',
  },
  {
    name: 'Adrian',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/adrian.jpg',
  },
  {
    name: 'Glen',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/glen.jpg',
  },
  {
    name: 'Sebastian',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/sebastian.jpg',
  },
  {
    name: 'Brian',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/brian.jpg',
  },
  {
    name: 'Maria',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/maria.jpg',
  },
  {
    name: 'Sergio',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/sergio.jpg',
  },
  {
    name: 'Ashley',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/ashley.jpg',
  },
  {
    name: 'Michael S.',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/michael_scott.jpg',
  },
  {
    name: 'Jose',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/jose.jpg',
  },
  {
    name: 'Oscar',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/oscar.jpg',
  },
  {
    name: 'Yusef',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/yusef.jpg',
  },
  {
    name: 'Manuel',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/manuel.jpg',
  },
  {
    name: 'Andy',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/andy.jpg',
  },
  {
    name: 'James',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/james.jpg',
  },
  {
    name: 'Esteban',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/esteban.jpg',
  },
  {
    name: 'Juan L.',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/juan_lopez.jpg',
  },
  // ── Sales (continued) ────────────────────────────────────────────────────
  {
    name: 'Allan',
    title: 'Closer',
    imageSrc: '/images/people/stoneman.jpeg',
  },
];

export function EmployeeSection() {
  const slides = data.map((item) => <Card key={item.name} {...item} />);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>Meet Your Team at StoneSystems</Title>
        <SimpleGrid cols={mobile ? 1 : 3}>{slides}</SimpleGrid>
      </Container>
    </div>
  );
}
