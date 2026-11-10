'use client';

import { Container, Title, Text, Flex, Grid, Paper, SimpleGrid, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './IntroSection.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';

interface FeatureProps {
  statistics: [{ stat: string; description: string }];
  benefits: [{ title: string; description: string; icon: string }];
  title: string;
  title2: string;
  videoSrc: string;
  videoThumbnail: string;
}

export function IntroSection({
  statistics,
  benefits,
  title,
  title2,
  videoSrc,
  videoThumbnail,
}: FeatureProps) {
  const mobile = useMediaQuery('(max-width: 600px)');
  const benefitsContent = benefits.map((benefit) => (
    <Paper className={classes.featureInfo} radius="md" key={benefit.title}>
      <Flex align="center" mb="sm">
        <Image src={benefit.icon} className={classes.icon} />
        <Title order={3} className={classes.infoTitle}>
          {benefit.title}
        </Title>
      </Flex>
      <Text dangerouslySetInnerHTML={{ __html: benefit.description }} />
    </Paper>
  ));
  const statsContent = statistics.map((statistic, index) => (
    <Paper className={classes.statistic} radius="md" key={index}>
      <Text>
        <span className={classes.percentage}>{statistic.stat}</span> <br />
        {statistic.description}
      </Text>
    </Paper>
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container size="lg">
          <Title className={classes.mainTitle}>{title}</Title>
          <Grid columns={18}>
            {!mobile && (
              <Grid.Col span={6}>
                <SimpleGrid className={classes.statisticDiv}>{statsContent}</SimpleGrid>
              </Grid.Col>
            )}
            <Grid.Col span={mobile ? 18 : 12}>
              <Paper className={classes.video} radius="md">
                <Title order={2} className={classes.videoTitle}>
                  See a short demo below
                </Title>
                <LazyLoadVideo
                  poster={videoThumbnail}
                  alt={title}
                  src={videoSrc}
                  type="video/mp4"
                  width="100%"
                  height="auto"
                />
              </Paper>
            </Grid.Col>
          </Grid>
          {mobile && <SimpleGrid className={classes.statisticDiv}>{statsContent}</SimpleGrid>}
        </Container>
      </div>
      <div className={classes.outer2}>
        <Container size="lg">
          <Title className={classes.mainTitle2}>{title2}</Title>
          <SimpleGrid cols={mobile ? 1 : 2}>{benefitsContent}</SimpleGrid>
        </Container>
      </div>
    </>
  );
}
