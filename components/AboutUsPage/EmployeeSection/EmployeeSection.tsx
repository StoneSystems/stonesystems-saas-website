'use client';

import { Text, Paper, Container, SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import classes from './EmployeeSection.module.css';

interface CardProps {
  name: string;
  title: string;
  /** Omit until a headshot is in /public/images/people/ — the card shows initials instead. */
  imageSrc?: string;
}

function initials(name: string) {
  return name
    .replace(/\./g, '')
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

function Card({ name, title, imageSrc }: CardProps) {
  return (
    <Paper py="lg" radius="md" bg="var(--white)">
      {imageSrc ? (
        <Image className={classes.avatar} src={imageSrc} width={200} height={200} alt={name} />
      ) : (
        <div className={classes.initials} role="img" aria-label={name}>
          {initials(name)}
        </div>
      )}
      <Text className={classes.name} ta="center" mt="md">
        {name}
      </Text>
      <Text className={classes.jobTitle} ta="center" c="dimmed">
        {title}
      </Text>
    </Paper>
  );
}

// Roster mirrors the Notion "People Directory" (names, job titles, departments).
// Headshots come from each person's Notion page; omit imageSrc to show initials.
const data: CardProps[] = [
  // ── Executive ──────────────────────────────────────────────────────────────
  { name: 'Kai', title: 'Founder', imageSrc: '/images/people/kai_stone.jpg' },
  { name: 'Michael', title: 'CEO / Founder', imageSrc: '/images/people/michael_vanhoutte.jpg' },
  { name: 'Chelsea', title: 'Executive Assistant', imageSrc: '/images/people/chelsea.jpg' },

  // ── Engineering ────────────────────────────────────────────────────────────
  { name: 'Umer', title: 'Software Engineer', imageSrc: '/images/people/umer.jpg' },
  { name: 'Manuel O.', title: 'Software Engineer', imageSrc: '/images/people/manuel_ojeda.jpg' },
  { name: 'Adrian', title: 'Software Engineer', imageSrc: '/images/people/adrian.jpg' },

  // ── Customer Success ───────────────────────────────────────────────────────
  { name: 'Glen', title: 'CSM Team Lead', imageSrc: '/images/people/gediminas_margis.jpg' },
  { name: 'Ben', title: 'GMB Expert', imageSrc: '/images/people/ben_zazueta.jpg' },
  { name: 'Brian', title: 'Customer Success Manager', imageSrc: '/images/people/brian.jpg' },
  {
    name: 'Sebastian V.',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/sebastian.jpg',
  },
  { name: 'James', title: 'Customer Success Manager', imageSrc: '/images/people/james.jpg' },
  { name: 'Oscar', title: 'Customer Success Manager', imageSrc: '/images/people/oscar.jpg' },
  { name: 'Manuel P.', title: 'Customer Success Manager', imageSrc: '/images/people/manuel.jpg' },
  {
    name: 'Sebastian I.',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/sebastian_idarraga.jpg',
  },
  { name: 'Zac', title: 'Customer Success Manager', imageSrc: '/images/people/zlatan_mizdrak.jpg' },
  { name: 'Josh', title: 'Customer Success Manager', imageSrc: '/images/people/josue_vallejo.jpg' },
  {
    name: 'Rashaan',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/rashaan_cain.jpg',
  },
  { name: 'Dani', title: 'Customer Success Manager', imageSrc: '/images/people/dani_diaz.jpg' },
  {
    name: 'Guilherme',
    title: 'Customer Success Manager',
    imageSrc: '/images/people/guilherme_barros.jpg',
  },

  // ── Sales ──────────────────────────────────────────────────────────────────
  { name: 'Calvin', title: 'Sales Manager', imageSrc: '/images/people/calvin_pereira.jpg' },
  { name: 'Dale', title: 'Closer', imageSrc: '/images/people/dale_kelley.jpg' },
  { name: 'Alex', title: 'Closer', imageSrc: '/images/people/alex.jpg' },
  { name: 'Tanner', title: 'Closer', imageSrc: '/images/people/tanner_martin.jpg' },
  { name: 'Isaac', title: 'Closer', imageSrc: '/images/people/isaac_gomez.jpg' },
  { name: 'Natalia', title: 'Appointment Setter', imageSrc: '/images/people/natalia.jpg' },
  { name: 'Jeffrey', title: 'Appointment Setter', imageSrc: '/images/people/jeffrey_kay.jpg' },
  { name: 'David', title: 'Appointment Setter', imageSrc: '/images/people/david_saint.jpg' },
  { name: 'Luis', title: 'Appointment Setter', imageSrc: '/images/people/luis_morales.jpg' },
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
