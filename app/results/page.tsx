import { Metadata } from 'next';
import { TestimonialSection } from '@/components/TestimonialPage/TestimonialSection/TestimonialSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Results',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function ResultsPage() {
  return (
    <>
      <TestimonialSection />{' '}
    </>
  );
}
