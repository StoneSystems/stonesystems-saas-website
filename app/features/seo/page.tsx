import { Metadata } from 'next';
import { IntroSection } from '@/components/FeaturePages/IntroSection/IntroSection';

export const metadata: Metadata = {
  title: 'Stone Systems - Local SEO',
  description:
    'Contractors trust us to transform their business with marketing systems, website design, reputation management and automation. And we do all of that at an affordable price!',
};

export default function SEOPage() {
  const benefits = [
    {
      title: 'On-Site SEO',
      description:
        'On-site SEO focuses on several key areas to enhance your website’s performance. First, evaluate how well your content is optimized and whether your search engine visibility has improved over the past month. Check if the volume of your ranked keywords has increased, and stay updated on any Google algorithm changes that might affect your site. Ensure your keywords accurately reflect your products or services. Lastly, focus on nurturing “low-hanging fruit”—keywords and pages with growth potential but currently lower rankings—to boost your overall SEO.',
      icon: '/images/features/device-imac.svg',
    },
    {
      title: 'Off-Site SEO',
      description:
        "Off-site SEO involves optimizing factors outside your website to improve its overall search engine ranking. Start by reviewing your Google My Business listing to ensure it's live and accurate. Monitor the volume of inbound links to track growth and identify any loss of key links. <br/> <br/> Assess your geographic targeting to ensure you're reaching the right audience, whether local, national, or international. Conduct an inbound link health check to ensure your links are high-quality and beneficial. Finally, check for any issues with search engine crawling to ensure your site hasn't been delisted by major search engines.",
      icon: '/images/features/browser.svg',
    },
    {
      title: 'Technical SEO',
      description: `Technical SEO ensures your website performs well in search engines. Check for NOINDEX tags to avoid excluding important pages. Evaluate site load, speed, SSL, mobile responsiveness, and redirects. Detect any hacks or issues, and ensure previous SEO work remains intact.<br/><br/>

      Refresh and resubmit your SiteMap if needed, and verify its integrity. Implement schema.org structured data for better visibility. Use Search Console to check GoogleBot rendering, security issues, crawl errors, and speed. Monitor site traffic, rankings, and keyword performance for a complete overview.`,
      icon: '/images/features/settings.svg',
    },
    {
      title: 'Google My Business',
      description: `Optimize your Google My Business (GMB) by checking your live listing for accuracy. Track inbound link volume to monitor link growth and losses. Ensure your geographic targeting is correct and conduct an inbound link health check for quality.<br/><br/>

      Evaluate site search engine crawling to avoid delisting issues and use schema.org structured data to enhance search visibility. Verify Search Console metrics to ensure Google renders your GMB profile properly, and address any security or crawl errors. Finally, review site traffic, rankings, and keyword performance to gauge the effectiveness of your optimizations.`,
      icon: '/images/features/brand-google.svg',
    },
    {
      title: 'Monthly SEO Reporting',
      description:
        "Each month, you'll receive a detailed SEO report covering key metrics such as traffic trends, keyword rankings, backlink growth, and site health. Our reports will also include insights into content performance, competitor comparisons, and local SEO metrics. We’ll highlight any technical issues and provide actionable recommendations to keep your SEO strategy on track and continuously improving.",
      icon: '/images/features/report.svg',
    },
  ];

  const statistics = [
    {
      stat: '93%',
      description: 'of people use Google to find local businesses.',
    },
    {
      stat: '97%',
      description: 'of people learn more about a local company online than anywhere else.',
    },
    {
      stat: '46%',
      description: '46% of all searches have local purchase intent.',
    },
  ];

  return (
    <>
      <IntroSection
        statistics={statistics as [{ stat: string; description: string }]}
        benefits={benefits as [{ title: string; description: string; icon: string }]}
        title="Local SEO"
        title2="What is local SEO?"
        videoSrc="/videos/local-seo.mp4#t=0.1"
        videoThumbnail="/images/thumbnails/local-seo.jpg"
      />
    </>
  );
}
