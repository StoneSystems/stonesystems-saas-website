import { Container, SimpleGrid, Title } from '@mantine/core';
import type { HiringStep } from '@/lib/hiring';
import classes from './Careers.module.css';

interface Props {
  title: string;
  steps: HiringStep[];
}

export function HiringStepsSection({ title, steps }: Props) {
  return (
    <section
      className={`${classes.section} ${classes.paper}`}
      aria-labelledby="careers-process-title"
    >
      <Container size="lg">
        <div className={classes.stack}>
          <Title order={2} id="careers-process-title" className={classes.h2}>
            {title}
          </Title>
          <SimpleGrid
            component="ol"
            className={classes.list}
            cols={{ base: 1, sm: 2, md: steps.length >= 5 ? 5 : steps.length || 1 }}
            spacing="xl"
          >
            {steps.map((step) => (
              <li key={step.title} className={classes.item}>
                {step.number && <p className={classes.stepNumber}>{step.number}</p>}
                <Title order={3} className={classes.h3}>
                  {step.title}
                </Title>
                <p className={classes.muted}>{step.body}</p>
              </li>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </section>
  );
}
