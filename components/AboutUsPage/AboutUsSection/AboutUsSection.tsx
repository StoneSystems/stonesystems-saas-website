'use client';

import {
  Container,
  Text,
  SimpleGrid,
  ActionIcon,
  Group,
  rem,
  useMantineTheme,
} from '@mantine/core';
import Image from 'next/image';
import classes from './AboutUsSection.module.css';
import { IconBrandYoutube, IconBrandInstagram, IconBrandGoogle } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export function AboutUsSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <div className={classes.outer}>
      <Container size="lg">
        <SimpleGrid className={classes.grid} cols={mobile ? 1 : 2}>
          {mobile && (
            <Image
              width={500}
              height={570}
              src="/images/people/theboys.jpg"
              alt="About Us"
              className={classes.image}
            />
          )}
          <div>
            <Text className={classes.text}>
              At StoneSystems, our mission is simple: cut out the complexity and nonsense (aka the
              bullsh*t) from marketing. We’ve seen too many agencies drown contractors in buzzwords
              and nerdy technical terms that make the basics seem like rocket science. Marketing
              doesn’t need to be complicated, and it definitely shouldn’t come with a hefty price
              tag just because someone tries to make it sound fancy.
              <br />
              <br />
            </Text>
            <Text className={classes.text}>
              StoneSystems was built to offer affordable, no-nonsense systems for contractors who
              want to grow their business and online presence the right way—not the overpriced,
              overcomplicated way. Just like every building needs a solid foundation, your business
              does too. Without it, even the best designs won’t hold up. You just need something
              that works—a strong base to build your company on. That’s why we built StoneSystems.
              Let us be the foundation you need while you focus on what you do best: building your
              business.
            </Text>
            <Text className={classes.text} mt="1rem">
              Stone Systems is operated by Stone Systems LLC. The Stonesystems mobile app is
              published on the App Store and Google Play by MVH Management Consultancy LLC.
            </Text>
            <Group
              gap={0}
              className={classes.social}
              mt={'1rem'}
              justify="flex-start"
              wrap="nowrap"
            >
              <ActionIcon
                component="a"
                href="https://www.youtube.com/@StoneSystemsGMB"
                className={classes.icon}
                size="xl"
                mx={10}
                color="var(--blue)"
                variant="subtle"
              >
                <IconBrandYoutube style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://www.instagram.com/stonesystems.io"
                className={classes.icon}
                size="xl"
                mx={10}
                color="var(--blue)"
                variant="subtle"
              >
                <IconBrandInstagram style={{ width: rem(60), height: rem(60) }} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
          {!mobile && (
            <Image
              width={500}
              height={570}
              src="/images/people/theboys.jpg"
              alt="About Us"
              className={classes.image}
            />
          )}
        </SimpleGrid>
      </Container>
    </div>
  );
}
