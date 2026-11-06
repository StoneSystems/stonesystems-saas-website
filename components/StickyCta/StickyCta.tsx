'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { bookingUrl } from '@/lib/site';
import classes from './StickyCta.module.css';

/** Pages where the bar never shows: Careers, VSL and the legal pages (decision 48, 25a). */
const HIDDEN_ON = [
  '/careers',
  '/vsl',
  '/terms',
  '/privacy-policy',
  '/sms',
  '/dpa',
  '/do-not-sell',
  '/privacy-request',
  '/subprocessors',
];

const COOKIE_BANNER = '.stone-consent-banner';

/**
 * A Book A Call bar pinned to the bottom of phones and tablets. It appears once the visitor
 * has scrolled past the first screen (the hero already carries a Book A Call) and moves up to
 * sit above the cookie banner while that is on screen.
 */
export function StickyCta() {
  const pathname = usePathname() ?? '';
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState(0);
  const hidden = HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  useEffect(() => {
    if (hidden) return undefined;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [hidden]);

  useEffect(() => {
    if (hidden) return undefined;
    let bannerObserver: ResizeObserver | null = null;
    let watched: Element | null = null;

    const measure = () => {
      const banner = document.querySelector<HTMLElement>(COOKIE_BANNER);
      const rect = banner?.getBoundingClientRect();
      const overlap = rect && rect.height > 0 ? window.innerHeight - rect.top : 0;
      setBottom(overlap > 0 ? overlap + 8 : 0);
      if (banner && banner !== watched && typeof ResizeObserver !== 'undefined') {
        bannerObserver?.disconnect();
        bannerObserver = new ResizeObserver(measure);
        bannerObserver.observe(banner);
        watched = banner;
      }
    };

    measure();
    const bodyObserver = new MutationObserver(measure);
    bodyObserver.observe(document.body, { childList: true });
    window.addEventListener('resize', measure);
    return () => {
      bodyObserver.disconnect();
      bannerObserver?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <a
      href={bookingUrl('sticky-mobile')}
      target="_blank"
      rel="noopener noreferrer"
      className={visible ? `${classes.bar} ${classes.visible}` : classes.bar}
      style={{ bottom }}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Book A Call
    </a>
  );
}
