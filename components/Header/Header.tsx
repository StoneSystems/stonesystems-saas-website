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
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  IconDeviceMobileVibration,
  IconStarFilled,
  IconReport,
  IconSearch,
  IconPrinter,
  IconChevronDown,
  IconAppWindow,
  IconFileAnalytics,
  IconDeviceMobile,
  IconX,
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

const navLinks = [
  { label: 'Results', href: '/results' },
  { label: 'Trades', href: '/trades' },
  { label: 'About', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
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

function isCurrent(pathname: string | null, href: string) {
  return pathname === href || (pathname ?? '').startsWith(`${href}/`);
}

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [productLinksOpened, { toggle: toggleProductLinks }] = useDisclosure(false);
  const pathname = usePathname();
  const desktop = useMediaQuery('(min-width: 69em)');

  // If the window grows to desktop size while the menu is open, close it so the page is not left locked.
  useEffect(() => {
    if (desktop) closeDrawer();
  }, [desktop, closeDrawer]);

  const productLinks = productData.map((item) => <LinkButton key={item.title} {...item} />);
  const productsCurrent = (pathname ?? '').startsWith('/features/');
  const linkClass = (current: boolean) =>
    current ? `${classes.link} ${classes.linkCurrent}` : classes.link;

  const pageLinks = navLinks.map((item) => (
    <a
      key={item.href}
      href={item.href}
      className={linkClass(isCurrent(pathname, item.href))}
      aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
    >
      {item.label}
    </a>
  ));

  return (
    <Box className={classes.stickyHeader}>
      <header className={classes.header}>
        <Group justify="space-between" w="100%" maw={rem(1328)} h="100%" wrap="nowrap">
          <Group h="100%" gap={0} wrap="nowrap" className={classes.desktopOnly}>
            <a href="/" className={classes.link}>
              <Image loading="eager" src="/images/newlogo.png" alt="logo" width={200} height={81} />
            </a>
            <HoverCard width={1000} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a
                  href="#"
                  className={linkClass(productsCurrent)}
                  aria-current={productsCurrent ? 'page' : undefined}
                >
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

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between" align="center" wrap="nowrap">
                    <Text className={classes.dropdownFooterText}>
                      Not sure which system you need? Book a call
                    </Text>
                    <Button
                      component="a"
                      href={bookingUrl('products-dropdown')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.button}
                      size="md"
                      bg="var(--yellow)"
                      color="var(--gray)"
                    >
                      Book A Call
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            {pageLinks}
          </Group>

          <Group wrap="nowrap" className={classes.desktopOnly}>
            <a
              href="https://app.stonesystems.io"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              Log In
            </a>
            <Button
              component="a"
              href={bookingUrl('header-nav')}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.button}
              size="lg"
              bg="var(--yellow)"
              color="var(--gray)"
            >
              Book A Call
            </Button>
          </Group>
          <a href="/" className={classes.mobileOnly}>
            <Image loading="eager" src="/images/newlogo.png" alt="logo" width={200} height={81} />
          </a>
          <Burger
            size="xl"
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.mobileOnly}
            aria-label="Menu"
            aria-expanded={drawerOpened}
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
        size="100%"
        padding="md"
        classNames={{ content: classes.drawerContent }}
        title={
          <Image loading="eager" src="/images/newlogo.png" alt="logo" width={200} height={81} />
        }
        closeButtonProps={{
          icon: <IconX size={40} stroke={1.5} />,
          size: 'xl',
        }}
        className={classes.mobileOnly}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100dvh - ${rem(80)} - ${rem(130)})`} mx="-md">
          <Divider my="sm" />

          <a href="/" className={classes.link}>
            Home
          </a>
          <UnstyledButton onClick={toggleProductLinks} aria-expanded={productLinksOpened}>
            <Center inline>
              <Box className={linkClass(productsCurrent)} component="span" mr={5}>
                Products
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color="#000000"
                className={productLinksOpened ? classes.chevronOpen : classes.chevron}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={productLinksOpened}>{productLinks}</Collapse>
          {pageLinks}
        </ScrollArea>
        <div className={classes.drawerFooter}>
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
        </div>
      </Drawer>
    </Box>
  );
}
