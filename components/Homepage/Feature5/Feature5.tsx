'use client';

import { Container, Title, Button, Text, Flex, Modal, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import classes from './Feature5.module.css';
import PhoneImage from '@/public/animations/LOCAL_SEO.gif';

const VideoPopup = dynamic(() =>
  import('@/components/Popups/VideoPopup/VideoPopup').then((mod) => mod.VideoPopup)
);

const features = [
  {
    title: 'Qualified Leads',
    description:
      "Sounds better than paying $50 for a lead that doesn't even pick up the phone, right?",
  },
  {
    title: 'Stop Paying For Unqualified Lead',
    description: 'Like mom always said, quality over quantity. Do we agree with her on this?',
  },
  {
    title: 'Organic Acquisition System',
    description: 'Create your own qualified leads instead of paying for tirekickers.',
  },
];

export function Feature5() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [opened, { close, open }] = useDisclosure(false);
  const items = features.map((feature) => (
    <div key={feature.title}>
      <Flex>
        <IconRosetteDiscountCheckFilled color="var(--yellow)" />
        <Text className={classes.featureTitle}>{feature.title}</Text>
      </Flex>
      <Text className={classes.featureDescription}>{feature.description}</Text>
    </div>
  ));

  return (
    <div className={classes.outer}>
      <Container size="xl">
        <div className={classes.inner}>
          <Image alt="website animation" unoptimized src={PhoneImage} className={classes.image} />
          <div className={classes.content}>
            <Title className={classes.title}>Local SEO</Title>
            <Text className={classes.description} mt="md">
              &quot;Rank number one on Google in a week!&quot;
              <br /> Just kidding, SEO takes time...
            </Text>
            <Flex mt="lg" direction="column">
              {items}
            </Flex>
            <Button onClick={open} size="xl" bg="var(--yellow)" className={classes.control}>
              See Short Demo
            </Button>
            <Modal
              closeButtonProps={{
                size: 'xl',
              }}
              title={mobile ? 'Local SEO' : ''}
              opened={opened}
              onClose={close}
              size="xl"
            >
              <VideoPopup
                videoSrc="/videos/local-seo.mp4#t=0.1"
                videoThumbnail="/images/thumbnails/local-seo.jpg"
                title="Local SEO"
              />
            </Modal>
          </div>
        </div>
      </Container>
    </div>
  );
}
