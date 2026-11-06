'use client';

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconDeviceMobileVibration,
  IconStarFilled,
  IconReport,
  IconSearch,
  IconPrinter,
  IconChevronDown,
  IconAppWindow,
  IconFileAnalytics,
  IconHeartHandshake,
  IconMail,
  IconNotebook,
  IconTimeline,
  IconUsers,
  IconDeviceMobile,
  IconX,
  IconTools,
} from '@tabler/icons-react';
import Image from 'next/image';
import { bookingUrl } from '@/lib/site';
import classes from './Header.module.css';

const productData = [
  {
    icon: IconAppWindow,
    title: 'Functional Website',
    description: 'Get a lead-generating Website in just days',
    href: '/features/functional-website',
  },
  {
    icon: IconDeviceMobileVibration,
    title: 'Missed Call Text Back',
    description: 'Automatically text back missed calls',
    href: '/features/missed-call-text-back',
  },
  {
    icon: IconPrinter,
    title: 'Printing Services',
    description: 'Put your business out there both on and offline',
    href: '/features/printing-services',
  },
  {
    icon: IconFileAnalytics,
    title: 'All-In-One Inbox',
    description: 'Get all your messages in one place',
    href: '/features/all-in-one-inbox',
  },
  {
    icon: IconDeviceMobile,
    title: 'Business Phone',
    description: 'Separate business and personal',
    href: '/features/business-phone',
  },
  {
    icon: IconSearch,
    title: 'Local SEO',
    description: 'Actually get found on Google',
    href: '/features/seo',
  },
  {
    icon: IconStarFilled,
    title: '5-Star Magic Review Funnel',
    description: 'Get more 5 star reviews and prevent bad ones',
    href: '/features/5-star-magic-funnel',
  },
  {
    icon: IconFileAnalytics,
    title: 'One-Click Marketing Campaigns',
    description: 'Keep your customers thinking about you',
    href: '/features/marketing-campaigns',
  },
  {
    icon: IconReport,
    title: 'Automated Lead Follow Up',
    description: 'Automatically follow up with leads via text',
    href: '/features/automated-lead-follow-up',
  },
];

const aboutData = [
  {
    icon: IconUsers,
    title: 'About Us',
    description: 'Get to know StoneSystems',
    href: '/about-us',
  },
  {
    icon: IconTimeline,
    title: 'Our Process',
    description: 'Discover how we work',
    href: '/our-process',
  },
  {
    icon: IconTools,
    title: 'Trades We Serve',
    description: 'Who we work with',
    href: '/trades-we-serve',
  },
  {
    icon: IconNotebook,
    title: 'Careers',
    description: 'Join the team',
    href: '/careers',
  },
  {
    icon: IconHeartHandshake,
    title: 'Partners',
    description: 'Meet our partners',
    href: '/partners',
  },
  {
    icon: IconMail,
    title: 'Contact',
    description: 'Chat with us',
    href: '/contact',
  },
  {
    icon: IconNotebook,
    title: 'Press',
    description: 'Stone Systems in the news',
    href: '/press',
  },
];

interface LinkProps {
  icon: any;
  title: string;
  description: string;
  href: string;
}

const LinkButton = (item: LinkProps) => (
  <UnstyledButton
    component="a"
    href={item.href}
    pt="md"
    pb="md"
    pr="xl"
    pl="md"
    className={classes.subLink}
  >
    <Group wrap="nowrap" align="center">
      <ThemeIcon size={52} variant="default" radius="md" bd="none" bg="#F1F1F1">
        <item.icon style={{ width: rem(32), height: rem(32) }} color="#000000" />
      </ThemeIcon>
      <div>
        <Text className={classes.subLinkTitle} fw={500}>
          {item.title}
        </Text>
        <Text className={classes.subLinkDescription} c="dimmed">
          {item.description}
        </Text>
      </div>
    </Group>
  </UnstyledButton>
);

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [productLinksOpened, { toggle: toggleProductLinks }] = useDisclosure(false);
  const [aboutLinksOpened, { toggle: toggleAboutLinks }] = useDisclosure(false);

  const productLinks = productData.map((item) => <LinkButton key={item.title} {...item} />);

  const aboutLinks = aboutData.map((item) => <LinkButton key={item.title} {...item} />);

  return (
    <Box className={classes.stickyHeader}>
      <header className={classes.header}>
        <Group justify="space-between" w="83em" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              <Image loading="eager" src="/images/newlogo.png" alt="logo" width={200} height={81} />
            </a>
            <HoverCard width={1000} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" ml="sm" mr={5}>
                      Products
                    </Box>
                    <IconChevronDown style={{ width: rem(16), height: rem(16) }} color="#000000" />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Text fw={500}>Systems & Features</Text>

                <Divider my="sm" />

                <SimpleGrid cols={3} spacing={0}>
                  {productLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="/pricing" className={classes.link}>
              Pricing
            </a>
            <a href="/testimonials" className={classes.link}>
              Testimonials
            </a>
            <a href="/our-work" className={classes.link}>
              Our Work
            </a>
            <a href="/blog" className={classes.link}>
              Blog
            </a>
            <HoverCard width={350} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      About
                    </Box>
                    <IconChevronDown style={{ width: rem(16), height: rem(16) }} color="#000000" />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <SimpleGrid cols={1} spacing={0}>
                  {aboutLinks}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group visibleFrom="sm">
            <Button
              className={classes.button2}
              c="var(--yellow)"
              size="lg"
              variant="default"
              bg="transparent"
              bd="none"
              component="a"
              href="https://app.stonesystems.io"
              target="_blank"
            >
              Log In
            </Button>
            <Button
              component="a"
              href={bookingUrl('header-nav')}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
              size="xl"
              bg="var(--yellow)"
              color="var(--gray)"
            >
              Book A Call
            </Button>
          </Group>
          <a href="/">
            <Image
              loading="eager"
              className={classes.logoImage}
              src="/images/newlogo.png"
              alt="logo"
              width={200}
              height={81}
            />
          </a>
          <Burger size="lg" opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Image loading="eager" src="/images/newlogo.png" alt="logo" width={200} height={81} />
        }
        closeButtonProps={{
          icon: <IconX size={40} stroke={1.5} />,
          size: 'xl',
        }}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          <UnstyledButton onClick={toggleProductLinks}>
            <Center inline>
              <Box className={classes.link} component="span" mr={5}>
                Products
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} color="#000000" />
            </Center>
          </UnstyledButton>
          <Collapse in={productLinksOpened}>{productLinks}</Collapse>
          <a href="/pricing" className={classes.link}>
            Pricing
          </a>
          <a href="/testimonials" className={classes.link}>
            Testimonials
          </a>
          <a href="/our-work" className={classes.link}>
            Our Work
          </a>
          <a href="/blog" className={classes.link}>
            Blog
          </a>
          <UnstyledButton onClick={toggleAboutLinks}>
            <Center inline>
              <Box className={classes.link} component="span" mr={5}>
                About
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} color="#000000" />
            </Center>
          </UnstyledButton>
          <Collapse in={aboutLinksOpened}>{aboutLinks}</Collapse>

          <a href="https://app.stonesystems.io" className={classes.linkLogin}>
            Log in
          </a>
          <a
            href={bookingUrl('header-nav')}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkModal}
          >
            Book A Call
          </a>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
