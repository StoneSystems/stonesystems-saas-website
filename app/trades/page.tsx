import { Metadata } from 'next';
import { AllTradesSection } from '@/components/TradesPage/AllTradesSection/AllTradesSection';
import { MainTradesSection } from '@/components/TradesPage/MainTradesSection/MainTradesSection';
import { ServicePagesSection } from '@/components/TradesPage/ServicePagesSection/ServicePagesSection';
import { getServicePageLinks } from '@/lib/servicePage';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Stone Systems - Trades',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};
export default async function TradesPage() {
  const servicePages = await getServicePageLinks();

  return (
    <>
      <MainTradesSection servicePages={servicePages} />
      <ServicePagesSection servicePages={servicePages} />
      <AllTradesSection />
    </>
  );
}
