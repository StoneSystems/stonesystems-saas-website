'use client';

import { Container, Title, Accordion } from '@mantine/core';
import classes from './ServiceFaq.module.css';

interface Props {
  heading: string;
  items: { question: string; answer: string }[];
}

/** Same look as the homepage FAQ. Closed answers stay in the HTML, so Google reads them. */
export function ServiceFaq({ heading, items }: Props) {
  if (items.length === 0) return null;

  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.wrapper}>
        <Title order={2} ta="center" className={classes.mainTitle}>
          {heading}
        </Title>

        <Accordion chevronSize={50} variant="separated" defaultValue="faq-0">
          {items.map((item, index) => (
            <Accordion.Item
              bg="var(--yellow)"
              className={classes.item}
              value={`faq-${index}`}
              key={item.question}
            >
              <Accordion.Control c="white" className={classes.itemTitle}>
                {item.question}
              </Accordion.Control>
              <Accordion.Panel bg="white" className={classes.itemDescription}>
                {item.answer}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
}
