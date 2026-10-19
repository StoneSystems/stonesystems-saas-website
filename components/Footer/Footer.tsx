'use client';

import { Text, Container, ActionIcon, Group, rem, Flex, Divider, Button } from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram, IconPhone } from '@tabler/icons-react';
import Image from 'next/image';
import { bookingUrl } from '@/lib/site';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Links',
    links: [
      { label: 'Pricing', link: '/pricing' },
      { label: 'Testimonials', link: '/testimonials' },
      { label: 'Our Work', link: '/our-work' },
      { label: 'Press', link: '/press' },
      { label: 'Log in', link: 'https://app.stonesystems.io' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Process', link: '/our-process' },
      { label: 'Trades We Serve', link: '/trades-we-serve' },
      { label: 'Careers', link: '/careers' },
      { label: 'Partners', link: '/partners' },
      { label: 'Contact', link: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Functional Website', link: '/features/functional-website' },
      { label: 'Missed Call Text Back', link: '/features/missed-call-text-back' },
      { label: '5 Star Magic Funnel', link: '/features/5-star-magic-funnel' },
      { label: 'Printing Services', link: '/features/printing-services' },
    ],
  },
  {
    links: [
      { label: 'Automated Lead Follow Up', link: '/features/automated-lead-follow-up' },
      { label: 'One-Click Marketing Campaigns', link: '/features/marketing-campaigns' },
      { label: 'All-In-One Inbox', link: '/features/all-in-one-inbox' },
      { label: 'Business Phone', link: '/features/business-phone' },
      { label: 'Local SEO', link: '/features/seo' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group, groupIndex) => {
    const links = group.links.map((linkItem) => (
      <Text
        key={linkItem.label}
        className={classes.link}
        component="a"
        mb="1rem"
        href={linkItem.link}
      >
        {linkItem.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title || `group-${groupIndex}`}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <Flex className={classes.logo} align="center" justify="space-between" direction="row">
          <Image
            className={classes.logoImage}
            src="/images/footerlogo.png"
            alt="logo"
            width={250}
            height={101}
          />

          <Flex className={classes.ctaDiv} align="center">
            <Text className={classes.cta}>Ready to get started?</Text>
            <Button
              component="a"
              href={bookingUrl('footer-top')}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
              size="md"
            >
              Book A Call
            </Button>
          </Flex>
        </Flex>
        <Divider my="2.5rem" color="var(--border-color)" />
      </Container>
      <Container size="lg" className={classes.inner}>
        <div className={classes.bigCta}>
          <Text className={classes.description}>Want to learn more about how we can help?</Text>
          <Button
            component="a"
            href={bookingUrl('footer-bottom')}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.button}
            mt="1rem"
            size="xl"
          >
            Book A Call
          </Button>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size="lg" className={classes.afterFooter}>
        <Flex className={classes.complianceLinks}>
          <Text className={classes.specialLink} component="a" href="/terms">
            Terms & Conditions
          </Text>
          <Text<'a'> className={classes.specialLink} component="a" href="/privacy-policy">
            Privacy Policy
          </Text>
          <Text<'a'> className={classes.specialLink} component="a" href="/sms">
            SMS Terms
          </Text>
          <Text<'a'> className={classes.specialLink} component="a" href="/dpa">
            DPA
          </Text>
          <Text<'a'> className={classes.specialLink} component="a" href="/do-not-sell">
            <span className={classes.privacyChoicesLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 14"
                width="30"
                height="14"
                aria-hidden="true"
                className={classes.privacyChoicesIcon}
              >
                <path
                  d="M7.4 12.8h6.8l3.1-11.6H7.4C4.2 1.2 1.6 3.8 1.6 7s2.6 5.8 5.8 5.8z"
                  fill="#fff"
                />
                <path
                  d="M22.6 0H7.4c-3.9 0-7 3.1-7 7s3.1 7 7 7h15.2c3.9 0 7-3.1 7-7s-3.2-7-7-7zm-21 7c0-3.2 2.6-5.8 5.8-5.8h9.9L11.2 12.8H7.4c-3.2 0-5.8-2.6-5.8-5.8z"
                  fill="#06f"
                />
                <path
                  d="M24.6 4c.2.2.2.6 0 .8L22.5 7l2.2 2.2c.2.2.2.6 0 .8-.2.2-.6.2-.8 0L21.7 7.8l-2.2 2.2c-.2.2-.6.2-.8 0-.2-.2-.2-.6 0-.8L20.9 7l-2.2-2.2c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0l2.2 2.2L23.8 4c.2-.2.6-.2.8 0z"
                  fill="#06f"
                />
                <path
                  d="M12.7 4.1c.2.2.3.6.1.8L8.6 9.8c-.1.1-.2.2-.3.2-.2.1-.5 0-.7-.1L5.4 7.7c-.2-.2-.2-.6 0-.8.2-.2.6-.2.8 0L8 8.6l3.8-4.5c.2-.2.6-.2.9 0z"
                  fill="#fff"
                />
              </svg>
              Your Privacy Choices
            </span>
          </Text>
          <Text<'a'> className={classes.specialLink} component="a" href="/privacy-request">
            Privacy Request
          </Text>
          <Text
            className={classes.specialLink}
            component="a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              (window as { StoneConsent?: { show?: () => void } }).StoneConsent?.show?.();
            }}
          >
            Cookie Settings
          </Text>
        </Flex>
        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            component="a"
            href="https://www.youtube.com/@StoneSystemsGMB"
            size="lg"
            mx={10}
            color="white"
            variant="subtle"
          >
            <IconBrandYoutube style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.instagram.com/stonesystems.io/"
            size="lg"
            mx={10}
            color="white"
            variant="subtle"
          >
            <IconBrandInstagram style={{ width: rem(24), height: rem(24) }} stroke={2} />
          </ActionIcon>
        </Group>
        <Text className={classes.copyright}>© 2026 Stone Systems LLC. All rights reserved.</Text>
      </Container>
    </footer>
  );
}
