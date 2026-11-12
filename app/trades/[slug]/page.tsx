import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getRelatedPosts,
  getServicePage,
  getServicePageLinks,
  pictureUrl,
  servicePagePath,
} from '@/lib/servicePage';
import { ServiceHero } from '@/components/ServicePage/ServiceHero';
import { ServiceIntro } from '@/components/ServicePage/ServiceIntro';
import { ServiceIncludes } from '@/components/ServicePage/ServiceIncludes';
import { ServiceProcess } from '@/components/ServicePage/ServiceProcess';
import { ServiceBody } from '@/components/ServicePage/ServiceBody';
import { ServiceRelated } from '@/components/ServicePage/ServiceRelated';
import { ServiceFaq } from '@/components/ServicePage/ServiceFaq';

export const revalidate = 60;

const SITE = 'https://stonesystems.io';

interface PageProps {
  params: { slug: string };
}

/** The published pages are built ahead; a new one is built on its first visit, then kept for a minute. */
export async function generateStaticParams() {
  const links = await getServicePageLinks();
  return links.map((link) => ({ slug: link.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await getServicePage(params.slug);
  if (!page) return { title: 'Page Not Found | Stone Systems' };

  const url = `${SITE}${servicePagePath(params.slug)}`;
  const title = page.metaTitle || `${page.title} | Stone Systems`;
  const image = pictureUrl(page.hero.picture, 1200);

  return {
    title,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: page.metaDescription,
      url,
      siteName: 'Stone Systems',
      type: 'website',
      images: image
        ? [{ url: image.startsWith('/') ? `${SITE}${image}` : image, alt: page.hero.picture?.alt }]
        : undefined,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const page = await getServicePage(params.slug);
  if (!page) notFound();

  const [links, posts] = await Promise.all([getServicePageLinks(), getRelatedPosts(page.trade)]);
  const others = links.filter((link) => link.slug !== params.slug);
  const sameTrade = others.filter((link) => link.trade === page.trade);
  const sameService = others.filter(
    (link) => link.trade !== page.trade && link.service === page.service
  );
  const siblings = [...sameTrade, ...sameService].slice(0, 12);

  const url = `${SITE}${servicePagePath(params.slug)}`;
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.title,
      serviceType: `${page.trade} ${page.service}`,
      description: page.metaDescription,
      url,
      provider: {
        '@type': 'Organization',
        name: 'Stone Systems',
        url: SITE,
        logo: `${SITE}/images/newlogo.png`,
      },
      areaServed: { '@type': 'Country', name: 'United States' },
      audience: { '@type': 'BusinessAudience', audienceType: `${page.trade} contractors` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Trades', item: `${SITE}/trades` },
        { '@type': 'ListItem', position: 3, name: `${page.trade} ${page.service}`, item: url },
      ],
    },
    ...(page.faq.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: page.faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero page={page} />
      <ServiceIntro page={page} />
      <ServiceIncludes page={page} />
      <ServiceProcess page={page} />
      <ServiceBody page={page} />
      <ServiceRelated page={page} siblings={siblings} posts={posts} />
      <ServiceFaq
        heading={`${page.trade} ${page.service}: frequently asked questions`}
        items={page.faq}
      />
    </>
  );
}
