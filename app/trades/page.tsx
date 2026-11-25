import { Metadata } from 'next';
import { AllTradesSection } from '@/components/TradesPage/AllTradesSection/AllTradesSection';
import { MainTradesSection } from '@/components/TradesPage/MainTradesSection/MainTradesSection';
import { ServicePagesSection } from '@/components/TradesPage/ServicePagesSection/ServicePagesSection';
import { getServicePageLinks } from '@/lib/servicePage';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Contractor Marketing and SEO by Trade | Stone Systems',
  description:
    'Marketing, SEO, websites and lead generation for roofers, plumbers, HVAC companies, electricians and home service contractors. Pick your trade to see the plan.',
  openGraph: {
    title: 'Contractor Marketing and SEO by Trade | Stone Systems',
    description:
      'Marketing, SEO, websites and lead generation for roofers, plumbers, HVAC companies, electricians and home service contractors.',
    url: 'https://stonesystems.io/trades',
    siteName: 'Stone Systems',
    type: 'website',
  },
  alternates: {
    canonical: 'https://stonesystems.io/trades',
  },
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
