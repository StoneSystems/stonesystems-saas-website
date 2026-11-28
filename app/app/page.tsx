import { Metadata } from 'next';
import { ClientAppPage } from '@/components/ClientAppPage/ClientAppPage';

export const metadata: Metadata = {
  title: 'Stone Systems - The Stonesystems App',
  description:
    'The Stonesystems app for Stone Systems customers: texts, calls, leads and appointments for home-service contractors, with Google Calendar and Outlook connected so you are never double-booked.',
};

export default function ClientAppRoutePage() {
  return <ClientAppPage />;
}
