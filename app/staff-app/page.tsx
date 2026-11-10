import { Metadata } from 'next';
import { StaffAppPage } from '@/components/StaffAppPage/StaffAppPage';

export const metadata: Metadata = {
  title: 'Stone Systems - Stone Staff App Support',
  description:
    'Help for Stone Staff, the phone app for the Stone Systems team: getting access, signing in, calls and notifications, your data, and how to reach support.',
};

export default function StaffAppRoutePage() {
  return <StaffAppPage />;
}
