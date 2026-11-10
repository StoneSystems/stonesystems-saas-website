import { Container, SimpleGrid, Title } from '@mantine/core';
import type { HiringItem } from '@/lib/hiring';
import classes from './Careers.module.css';

interface Props {
  title: string;
  items: HiringItem[];
}

export function ValuesSection({ title, items }: Props) {
  return (
    <section
      className={`${classes.section} ${classes.paper}`}
      aria-labelledby="careers-values-title"
    >
      <Container size="lg">
        <div className={classes.stack}>
          <Title order={2} id="careers-values-title" className={classes.h2}>
            {title}
          </Title>
          <SimpleGrid
            component="ul"
            className={classes.list}
            cols={{ base: 1, sm: 2, md: items.length >= 5 ? 5 : items.length || 1 }}
            spacing="xl"
          >
            {items.map((item) => (
              <li key={item.title} className={classes.item}>
                <Title order={3} className={classes.h3}>
                  {item.title}
                </Title>
                <p className={classes.muted}>{item.body}</p>
              </li>
            ))}
          </SimpleGrid>
        </div>
      </Container>
    </section>
  );
}
