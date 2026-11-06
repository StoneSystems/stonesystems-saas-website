'use client';

import { useState, useRef, useEffect } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Paper, Text, Container, Title, Image, Flex } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import LazyLoadVideo from '@/components/LazyLoadVideo/LazyLoadVideo';
import classes from './TestimonialSection.module.css';

interface CardProps {
  testimonial: string;
  videoSrc: string;
  videoThumbnail: string;
  personName: string;
  onPlay?: () => void;
  onPause?: () => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

function Card({
  personName,
  testimonial,
  videoSrc,
  videoThumbnail,
  onPause,
  onPlay,
  onFullscreenChange,
}: CardProps) {
  return (
    <Paper radius="md" className={classes.testimonialCard}>
      <LazyLoadVideo
        src={videoSrc}
        poster={videoThumbnail}
        alt={`${personName} testimonial`}
        type="video/mp4"
        width="100%"
        height="auto"
        onPlay={onPlay}
        onPause={onPause}
        onFullscreenChange={onFullscreenChange}
      />
      <div>
        <div className={classes.stars}>
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
          <Image src="/images/star.png" className={classes.star} />
        </div>
        <Text className={classes.testimonial}>{testimonial}</Text>
        <div className={classes.bottomDiv}>
          <Text className={classes.personName}>{personName}</Text>
          <Flex component="a" href="/testimonials" className={classes.linkDiv}>
            <Text className={classes.testimonialsLink}>See All</Text>
            <IconArrowRight />
          </Flex>
        </div>
      </div>
    </Paper>
  );
}

const data = [
  {
    testimonial:
      '"Highly recommended, they are here to help us contractors that don\'t like to deal with the website stuff. It feels like you have partner looking out for you that\'s actually helping you succeed."',
    videoSrc: '/videos/Adam1.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Adam1.png',
    personName: '-Adam',
  },
  {
    testimonial:
      "\"I've been working with stonesystems for the last few months and it's been absolutely amazing. If you're out there and you need someone that's gonna be there for you... we love working with stonesystems\"",
    videoSrc: '/videos/Dale.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Dale.png',
    personName: '-Dale',
  },
  {
    testimonial:
      '"Shoutout to Kai and Remy for an amazing job that they did doing my website. I\'ve been a pain in the butt every now and then but they did it right. Check them out, you won\'t be dissapointed."',
    videoSrc: '/videos/George.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/George.png',
    personName: '-George',
  },
  {
    testimonial:
      '"If you are looking for someone to get that phone ringing, they\'re the right fit for you! I\'m so happy with them!"',
    videoSrc: '/videos/Cody.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Cody.jpg',
    personName: '-Cody',
  },
  {
    testimonial:
      '"They are the absolute best at what they do. They built me a new website and within 10 day\'s I got my first unpaid for Lead! Best money spent with Kai and StoneSystems"',
    videoSrc: '/videos/Armando2.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Armando.jpg',
    personName: '-Armando',
  },
  {
    testimonial:
      '"After going through 2-3 other people i finally found someone that told me the truth. Really easy to work with and very respectable. I would recommend them to anyone!"',
    videoSrc: '/videos/James.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/James.jpg',
    personName: '-James',
  },
  {
    testimonial:
      '"Ever since he implemented the new website and landing pages, it\'s been nothing but great and our conversion has gone way up. We started getting calls almost immediately."',
    videoSrc: '/videos/Manny.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Manny.jpg',
    personName: '-Manny',
  },

  {
    testimonial:
      '"Getting 5 star reviews has always given me anxiety, Kai and his team have taken all that away and I have seen a significant increase in business since I started working with them. I would recommend them to anyone!"',
    videoSrc: '/videos/Wendy.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Wendy.jpg',
    personName: '-Wendy',
  },
  {
    testimonial:
      '"Nothing but professional and awesome in every way, they are absolutely great to work with"',
    videoSrc: '/videos/Netane.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Netane.jpg',
    personName: '-Netane',
  },
  {
    testimonial:
      '"I would highly recommend going with Stone Systems, my business has ramped up, literally overnight and their prices are very affordable. Feel free to reach out to me personally with any questions about them!"',
    videoSrc: '/videos/Frank.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Frank.jpg',
    personName: '-Frank',
  },
  {
    testimonial:
      '"I\'ve seen a significant improvement in my business. Stone Systems has made my life so much easier!"',
    videoSrc: '/videos/David.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/David.jpg',
    personName: '-David',
  },
  {
    testimonial:
      '"Thank you to Kai and Stone Systems , our company finally has the web presence it needs and our sales and profits have grown significantly! We look forward to working with them for many years to come!"',
    videoSrc: '/videos/Rick.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Rick.jpg',
    personName: '-Rick',
  },
  {
    testimonial:
      '"Their business marketing systems have helped us a lot. Anytime I need anything I can always give them a call. They\'re super helpful with everything they do, I would recommend them to anybody"',
    videoSrc: '/videos/Luckie.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Luckie.jpg',
    personName: '-Luckie',
  },
  {
    testimonial:
      '"Before I started working with Stonesystems I was paying $1500/month with another service that just was not working for me. Stonesystems is super affordable and they do a fantastic Job!"',
    videoSrc: '/videos/Lopaka.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Lopaka.jpg',
    personName: '-Lopaka',
  },
  {
    testimonial:
      '"It\'s been great and all I needed was one sale a month to pay for the service. Since I signed up i\'ve gotten quite a bit more than that. I would recommend them to anyone!"',
    videoSrc: '/videos/Adam.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Adam.jpg',
    personName: '-Adam',
  },
  {
    testimonial:
      '"They made me a brand new website, super professional and it\'s been absolutely amazing. I cannot say enough good things about theme. It turned those 100s of viewers into 100s of clients!"',
    videoSrc: '/videos/Mason.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/Mason.jpg',
    personName: '-Mason',
  },
  {
    testimonial:
      '"First i thought it was a scam, but then it turns out they\'re just a really good company at a really good price. I would recommend them to anyone!"',
    videoSrc: '/videos/Matt.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Matt.jpg',
    personName: '-Matt',
  },
  {
    testimonial:
      '"They\'ve made it so easy with all their automations and the awesome website. I can\'t thank them enough and you should all definitely check them out"',
    videoSrc: '/videos/RyanSmith.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/RyanSmith.jpg',
    personName: '-Ryan',
  },
  {
    testimonial:
      '"He really got everything going well. I\'m getting organic leads now that don\'t cost me any money. I would recommend them to anyone!"',
    videoSrc: '/videos/William.mp4#t=0.1',
    videoThumbnail: '/images/thumbnails/William.jpg',
    personName: '-Scott',
  },
  {
    testimonial:
      '"Big shoutout to Kai and Stone Systems for helping me with my website and getting me more leads. I would recommend them to anyone!"',
    videoSrc: '/videos/Zach.mov#t=0.1',
    videoThumbnail: '/images/thumbnails/Zach.jpg',
    personName: '-Zach',
  },
];
export function TestimonialSection() {
  const autoplay = useRef(Autoplay({ delay: 2800 }));
  const autoplayControl = autoplay.current;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const stopAutoplay = () => {
    if (autoplayControl) {
      autoplayControl.stop(); // Stop autoplay
    }
  };

  const resetAutoplay = () => {
    if (!isPlaying && !isFullscreen) {
      if (autoplayControl) {
        autoplayControl.reset(); // Resume autoplay only if neither condition is active
      }
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    stopAutoplay(); // Stop autoplay when video starts playing
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    resetAutoplay(); // Resume autoplay if fullscreen is also false
  };

  const handleFullscreenChange = (fullscreen: boolean) => {
    setIsFullscreen(fullscreen);
    if (fullscreen) {
      stopAutoplay(); // Stop autoplay if video enters fullscreen
    } else {
      resetAutoplay(); // Check if it should resume when exiting fullscreen
    }
  };

  // Make sure autoplay state updates when exiting fullscreen or pausing the video
  useEffect(() => {
    resetAutoplay();
  }, [isPlaying, isFullscreen]);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.videoSrc}>
      <Card
        {...item}
        onPause={handleVideoPause}
        onPlay={handleVideoPlay}
        onFullscreenChange={handleFullscreenChange}
      />
    </Carousel.Slide>
  ));

  return (
    <div className={classes.outer}>
      <Container size="lg">
        <Title className={classes.mainTitle}>
          The proof is in the pudding... <br /> Let&apos;s see what our clients have to say
        </Title>
      </Container>
      <Container size="responsive">
        <Carousel
          slideSize={{ base: '100%', sm: '50%' }}
          slideGap={{ base: 'xl', sm: 'xl' }}
          align="start"
          loop
          dragFree
          slidesToScroll={1}
          plugins={[autoplay.current]}
          classNames={{
            control: classes.control,
            controls: classes.controls,
            root: classes.root,
          }}
        >
          {slides}
        </Carousel>
      </Container>
    </div>
  );
}
