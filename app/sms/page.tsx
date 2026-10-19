import { Metadata } from 'next';
import { SmsPage } from '@/components/SmsPage/SmsPage';

export const metadata: Metadata = {
  title: 'Stone Systems - SMS Program Terms',
  description:
    'How Stone Systems LLC collects consent for text messages, what we send, message frequency, and how to opt out or get help.',
};

export default function SmsRoutePage() {
  return <SmsPage />;
}
