import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '../globals.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import type { Metadata, Viewport } from 'next';
import { Sora } from 'next/font/google';
import Script from 'next/script';
import { theme } from '../theme';
import { LayoutWrapper } from '@/components/LayoutWrapper/LayoutWrapper';
import { ConsentTracking } from '@/components/Tracking/ConsentTracking';

const APP_NAME = 'Stone Systems';
const APP_DEFAULT_TITLE = 'Stone Systems - Website Design & Marketing Systems For Contractors!';
const APP_DESCRIPTION =
  'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!';

export const metadata: Metadata = {
  metadataBase: new URL('https://stonesystems.io'),
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  // Plain strings on purpose. A `{ default, template }` title here is applied to every child
  // page's own `openGraph.title`, and the old template had no `%s`, so every page carried the
  // site slogan as its og:title and twitter:title (measured 2026-11-24 on /trades/electrician-seo).
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#e8a743',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--sora',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <Script id="spendback-pixel-config" strategy="beforeInteractive">
          {
            "window.s$Tracker = window.s$Tracker || {};window.s$Tracker['siteIdentifier'] = '1f1c8a3d-51c1-68b4-9376-f655be0f93fc';"
          }
        </Script>
        <Script
          src="https://tag.pixel.spendback.ai/static/js/pixel.spendback.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Script src="/cookie-consent.js" strategy="beforeInteractive" />
        <Script async src="https://app.usecortana.ai/api/widgets/cmhapx2wt000hjy04gs3ipqjf.js" />
        <MantineProvider theme={theme}>
          <ConsentTracking />
          <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
      </body>
    </html>
  );
}
