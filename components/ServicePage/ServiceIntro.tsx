import { Container, Title, Text, Paper } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { SanityServicePage } from '@/lib/servicePage';
import classes from './ServiceIntro.module.css';

/** The short answer, then why it matters. Gray, with the wave into the blue section below. */
export function ServiceIntro({ page }: { page: SanityServicePage }) {
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <div className={classes.answer}>
          <div className={classes.answerText}>
            <Title order={2} className={classes.heading}>
              {page.intro.heading}
            </Title>
            <Text className={classes.lead}>{page.intro.text}</Text>
          </div>
          {page.intro.points && page.intro.points.length > 0 && (
            <Paper radius="md" className={classes.points}>
              <Text className={classes.pointsTitle}>In short</Text>
              <ul>
                {page.intro.points.map((point) => (
                  <li key={point}>
                    <IconCircleCheck size={24} color="var(--yellow)" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Paper>
          )}
        </div>

        <Title order={2} className={classes.mainTitle}>
          {page.benefits.heading}
        </Title>
        <div className={classes.grid}>
          {page.benefits.items.map((item, index) => (
            <Paper radius="md" className={classes.card} key={item.title}>
              <span className={classes.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <Title order={3} className={classes.cardTitle}>
                {item.title}
              </Title>
              <Text className={classes.cardText}>{item.text}</Text>
            </Paper>
          ))}
        </div>
      </Container>
    </div>
  );
}
