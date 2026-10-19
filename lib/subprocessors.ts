/** Sub-processors listed in the Data Processing Addendum (Section 5.1) and on /subprocessors */
export type SubprocessorRow = {
  name: string;
  serviceProvided: string;
  location: string;
};

export const SUBPROCESSORS: SubprocessorRow[] = [
  {
    name: 'HighLevel LLC (GoHighLevel)',
    serviceProvided:
      'CRM, SMS/MMS, marketing automation, client portal, and related platform services',
    location: 'United States',
  },
  {
    name: 'Twilio Inc.',
    serviceProvided: 'SMS/MMS and voice delivery for messages and calls we send to you',
    location: 'United States',
  },
  {
    name: 'Stripe, Inc.',
    serviceProvided: 'Payment processing and billing',
    location: 'United States',
  },
  {
    name: 'Meta Platforms, Inc.',
    serviceProvided: 'Advertising delivery, measurement, and conversion tracking',
    location: 'United States',
  },
  {
    name: 'Google LLC',
    serviceProvided: 'Google Ads, Google Analytics, and related advertising or analytics services',
    location: 'United States',
  },
  {
    name: 'TikTok Technology Ltd / TikTok For Business',
    serviceProvided: 'Advertising delivery and measurement',
    location: 'United States / Singapore',
  },
  {
    name: 'LinkedIn Corporation',
    serviceProvided: 'Advertising delivery and measurement',
    location: 'United States',
  },
  {
    name: 'PostHog, Inc.',
    serviceProvided: 'Product and website analytics',
    location: 'United States',
  },
  {
    name: 'Resend, Inc.',
    serviceProvided: 'Transactional email delivery (e.g., privacy and account notifications)',
    location: 'United States',
  },
  {
    name: 'Vercel Inc.',
    serviceProvided: 'Website hosting, CDN, and application infrastructure',
    location: 'United States',
  },
];
