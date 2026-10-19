import { Metadata } from 'next';
import { DpaPage } from '@/components/DpaPage/DpaPage';

export const metadata: Metadata = {
  title: 'Stone Systems - Data Processing Addendum (DPA)',
  description:
    'Data Processing Addendum for Stone Systems LLC describing processor obligations, sub-processors, security, and contact information.',
};

export default function DpaRoutePage() {
  return <DpaPage />;
}
