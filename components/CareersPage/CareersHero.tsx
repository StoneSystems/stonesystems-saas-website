import { Container, Title } from '@mantine/core';
import classes from './Careers.module.css';

interface Props {
  title: string;
  subtitle: string;
}

export function CareersHero({ title, subtitle }: Props) {
  return (
    <section className={`${classes.section} ${classes.paper}`} aria-labelledby="careers-hero-title">
      <Container size="lg">
        <div className={`${classes.stack} ${classes.heroStack} ${classes.centered}`}>
          <Title order={1} id="careers-hero-title" className={classes.h1}>
            {title}
          </Title>
          {subtitle && <p className={classes.lead}>{subtitle}</p>}
        </div>
      </Container>
    </section>
  );
}
