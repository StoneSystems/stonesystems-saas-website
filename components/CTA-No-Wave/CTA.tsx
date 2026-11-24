import { Text, Title, Button, Container } from '@mantine/core';
import Image from 'next/image';

import { bookingUrl } from '@/lib/site';
import classes from './CTA.module.css';

export function CTANoWave() {
  return (
    <div className={classes.outer}>
      <Container size="lg" className={classes.wrapper}>
        <div className={classes.body}>
          <Title order={2} className={classes.title}>
            Want to schedule a time to talk?
          </Title>
          <Text className={classes.description} c="dimmed">
            See everything we do to help you grow your business so you can implement it yourself or
            let us do it for you.
          </Text>
          <Button
            component="a"
            href={bookingUrl('cta-no-wave')}
            target="_blank"
            rel="noopener noreferrer"
            size="xl"
            bg="var(--yellow)"
            className={classes.control}
          >
            Book A Call
          </Button>
        </div>
        <Image
          width={1080}
          height={1080}
          src="/images/cta-stoneman.png"
          alt="Stone Systems mascot in a yellow hard hat, arms open"
          className={classes.image}
        />
      </Container>
    </div>
  );
}
