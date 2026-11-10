import { Metadata } from 'next';
import { AllTradesSection } from '@/components/TradesPage/AllTradesSection/AllTradesSection';
import { MainTradesSection } from '@/components/TradesPage/MainTradesSection/MainTradesSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Trades',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};
export default function TradesPage() {
  return (
    <>
      <MainTradesSection />
      <AllTradesSection />
    </>
  );
}
