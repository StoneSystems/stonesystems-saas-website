'use client';

import { Container, Flex, SimpleGrid, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import classes from './ValuesSection.module.css';

export function ValuesSection() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>
            Our culture? It’s no accident. We’ve crafted it with the same precision as a Tinder bio
            that actually works.
          </Title>
          <SimpleGrid cols={mobile ? 1 : 2}>
            <div>
              <Flex className={classes.aboutValue}>
                <Image
                  className={classes.numberIcon}
                  width={80}
                  height={80}
                  src="/images/1.png"
                  alt="1"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    F*cks Given
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We’re in the business of giving a f*ck. And business is booming.
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  className={classes.numberIcon}
                  width={80}
                  height={55}
                  src="/images/2.png"
                  alt="2"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Humor
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We&apos;re serious about results, but our team meetings might as well be
                    stand-up gigs.
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  className={classes.numberIcon}
                  width={80}
                  height={55}
                  src="/images/3.png"
                  alt="3"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Genuine
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    Real talk and real action. We’re genuine because anything else is boring.
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  className={classes.numberIcon}
                  width={80}
                  height={55}
                  src="/images/4.png"
                  alt="4"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Humility
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    We’re perfect, we&apos;ve never made a mistake, right? (But… if we do, you know
                    we’ll fix it right away).
                  </Text>
                </div>
              </Flex>
              <Flex className={classes.aboutValue}>
                <Image
                  className={classes.numberIcon}
                  width={80}
                  height={55}
                  src="/images/5.png"
                  alt="5"
                />
                <div>
                  <Title order={3} className={classes.aboutTitle}>
                    Integrity
                  </Title>
                  <Text c="dimmed" className={classes.aboutDescription}>
                    When we say we&apos;ll do something we do it. It&apos;s that simple.
                  </Text>
                </div>
              </Flex>
            </div>
            <Image
              className={classes.stoneMan}
              width={505}
              height={907}
              src="/images/new1.png"
              alt="stone systems guy"
            />
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
}
