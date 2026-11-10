'use client';

import { Container, Title } from '@mantine/core';
import classes from './IntroSection.module.css';

export function IntroSection() {
  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>Less bullshit, more results</Title>
        </Container>
      </div>
    </>
  );
}
