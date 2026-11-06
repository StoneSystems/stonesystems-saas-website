'use client';

import { Container, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './VideoPopup.module.css';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';

export function VideoPopup({
  videoSrc,
  title,
  videoThumbnail,
}: {
  videoSrc: string;
  title: string;
  videoThumbnail: string;
}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Container className={classes.popup} size="xl">
      {!mobile && (
        <Title className={classes.title} order={1}>
          {title}
        </Title>
      )}
      <LazyLoadVideo
        poster={videoThumbnail}
        alt={title}
        src={videoSrc}
        type="video/mp4"
        width="100%"
        height="auto"
      />
    </Container>
  );
}
