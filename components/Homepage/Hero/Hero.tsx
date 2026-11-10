'use client';

import { Container, Title, Button, Text, Flex, Divider } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { bookingUrl } from '@/lib/site';
import classes from './Hero.module.css';
import StoneManImage from '@/public/images/new1.png';

export function Hero() {
  return (
    <div className={classes.outer}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Flex className={classes.titleDiv}>
              <Divider size={2} mr={40} color="var(--border-color)" orientation="vertical" />
              <Title className={classes.title}>
                Website Design & Marketing Systems For Contractors
              </Title>
            </Flex>
            <Flex className={classes.textDiv}>
              <Text className={classes.description}>
                Cut the bullsh*t, Marketing isn&apos;t rocket science. <br /> No agency...
                (including ours) has the miracle solution to all your problems. We&apos;ll give you
                the tools to win but you need to commit to using them!
              </Text>
              <div className={classes.buttonDiv}>
                <Flex>
                  <Image
                    loading="eager"
                    width={38}
                    height={38}
                    className={classes.avatar}
                    alt="picture of michael"
                    src="/images/people/michaelsmall.jpg"
                  />
                  <Image
                    loading="eager"
                    width={38}
                    height={38}
                    className={classes.avatar}
                    alt="picture of kai"
                    src="/images/people/kaismall.jpeg"
                  />
                  <Image
                    loading="eager"
                    width={38}
                    height={38}
                    className={classes.avatar}
                    alt="picture of kevin"
                    src="/images/people/camilasmall.jpeg"
                  />
                  <Image
                    loading="eager"
                    width={38}
                    height={38}
                    className={classes.avatar}
                    alt="picture of astrid"
                    src="/images/people/astridsmall.jpeg"
                  />
                  <Image
                    loading="eager"
                    width={38}
                    height={38}
                    className={classes.avatar}
                    alt="picture of astrid"
                    src="/images/people/elizabethsmall.jpg"
                  />
                </Flex>
                <Button
                  component="a"
                  href={bookingUrl('homepage-hero')}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xl"
                  className={classes.control}
                >
                  Book A Call
                </Button>
              </div>
            </Flex>
            <Flex className={classes.creditDiv}>
              {['google.webp', 'facebook.png', 'trustpilot.png'].map((logo, index) => (
                <React.Fragment key={logo}>
                  <div className={classes.credit}>
                    <Image
                      loading="eager"
                      width={44}
                      height={44}
                      alt={`${logo.split('.')[0]} logo`}
                      src={`/images/${logo}`}
                      className={classes.creditImage}
                    />
                    <div>
                      <Text className={classes.creditTitle}>
                        {logo.split('.')[0].charAt(0).toUpperCase() + logo.split('.')[0].slice(1)}
                      </Text>
                      <div className={classes.stars}>
                        {Array(5)
                          .fill(0)
                          .map((_, starIndex) => (
                            <Image
                              loading="eager"
                              key={starIndex}
                              width={22}
                              height={22}
                              alt="star"
                              src="/images/star.png"
                              className={classes.star}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                  {index < 2 && (
                    <Divider
                      className={classes.divider}
                      mx={20}
                      color="var(--border-color)"
                      orientation="vertical"
                    />
                  )}
                </React.Fragment>
              ))}
            </Flex>
          </div>
          <Image
            loading="eager"
            alt="stone systems man"
            height={700}
            width={350}
            src={StoneManImage}
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
}
