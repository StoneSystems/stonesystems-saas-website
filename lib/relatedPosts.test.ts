/// <reference types="jest" />
import {
  pickRelatedPosts,
  pickRelatedServicePages,
  postNeighbours,
  stem,
  topicWords,
} from './relatedPosts';

const post = (slug: string, title: string, publishDate: string, targetKeyword?: string) => ({
  slug: { current: slug },
  title,
  publishDate,
  targetKeyword,
});

const posts = [
  post('roofing-seo-tips', 'Roofing SEO: Get Found by Homeowners', '2026-05-01', 'roofing seo'),
  post('how-to-price-roofing-jobs', 'How to Price Roofing Jobs', '2026-04-20', 'roofing prices'),
  post('contractor-business-plan', 'Contractor Business Plan: A Simple Template', '2026-04-26'),
  post(
    'hvac-marketing',
    'HVAC Marketing Strategies That Book Jobs',
    '2026-04-10',
    'hvac marketing'
  ),
  post('newest-unrelated', 'Yard Signs for Contractors', '2026-08-10', 'yard signs'),
];

describe('stem and topicWords', () => {
  it('folds roofing, roofers and roof into one word', () => {
    expect(stem('Roofing')).toBe(stem('roofers'));
    expect(stem('roof')).toBe(stem('Roofing'));
    expect(stem('pricing')).toBe(stem('price'));
  });

  it('drops function words and the words on every title', () => {
    const words = topicWords('How to Get More Contractor Leads for Your Business');
    expect(words.has('contractor')).toBe(false);
    expect(words.has('how')).toBe(false);
    expect(words.has('lead')).toBe(true);
  });
});

describe('pickRelatedPosts', () => {
  it('ranks by shared topic words and never returns the post itself', () => {
    const me = post(
      'roofing-marketing-agency',
      'Roofing Marketing Agency',
      '2026-06-01',
      'roofing marketing'
    );
    const picked = pickRelatedPosts(me, [...posts, me]).map((p) => p.slug.current);
    expect(picked).toHaveLength(3);
    expect(picked).not.toContain('roofing-marketing-agency');
    expect(picked[0]).toBe('roofing-seo-tips');
    expect(picked.slice(0, 3)).toEqual(
      expect.arrayContaining(['roofing-seo-tips', 'how-to-price-roofing-jobs', 'hvac-marketing'])
    );
  });

  it('fills with the newest posts when nothing shares a word', () => {
    const me = post('change-orders', 'Construction Change Order Process', '2026-04-30');
    const picked = pickRelatedPosts(me, posts).map((p) => p.slug.current);
    expect(picked).toEqual(['newest-unrelated', 'roofing-seo-tips', 'contractor-business-plan']);
  });

  it('is the same on every call', () => {
    const me = posts[1];
    expect(pickRelatedPosts(me, posts)).toEqual(pickRelatedPosts(me, posts));
  });
});

describe('pickRelatedServicePages', () => {
  const links = [
    { title: 'Roofing SEO', slug: 'roofing-seo', trade: 'Roofing', service: 'SEO' },
    {
      title: 'Roofing Marketing Agency',
      slug: 'roofing-marketing-agency',
      trade: 'Roofing',
      service: 'Marketing',
    },
    {
      title: 'HVAC Lead Generation',
      slug: 'hvac-lead-generation',
      trade: 'HVAC',
      service: 'Lead Generation',
    },
    { title: 'SEO for Plumbers', slug: 'seo-for-plumbers', trade: 'Plumbing', service: 'SEO' },
  ];

  it('matches the trade and the service words, most matches first', () => {
    const me = post('roofing-seo-tips', 'Roofing SEO: Get Found', '2026-05-01', 'roofing seo');
    expect(pickRelatedServicePages(me, links).map((l) => l.slug)).toEqual([
      'roofing-seo',
      'roofing-marketing-agency',
    ]);
  });

  it('skips pages shown elsewhere and hides when nothing fits', () => {
    const me = post('roofing-seo-tips', 'Roofing SEO: Get Found', '2026-05-01', 'roofing seo');
    expect(pickRelatedServicePages(me, links, 2, ['roofing-seo']).map((l) => l.slug)).toEqual([
      'roofing-marketing-agency',
      'seo-for-plumbers',
    ]);
    expect(pickRelatedServicePages(post('x', 'Yard Signs', '2026-01-01'), links)).toEqual([]);
  });
});

describe('postNeighbours', () => {
  it('gives the next newer and the next older post by publish date', () => {
    const { newer, older } = postNeighbours(posts[2], posts);
    expect(newer?.slug.current).toBe('roofing-seo-tips');
    expect(older?.slug.current).toBe('how-to-price-roofing-jobs');
  });

  it('has no newer post at the top and no older post at the bottom', () => {
    expect(postNeighbours(posts[4], posts).newer).toBeNull();
    expect(postNeighbours(posts[3], posts).older).toBeNull();
    expect(postNeighbours(post('missing', 'Missing', '2026-01-01'), posts)).toEqual({
      newer: null,
      older: null,
    });
  });
});
