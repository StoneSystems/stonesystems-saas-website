import type { SanityServicePage } from '@/lib/servicePage';

/**
 * Sample service pages, for building and judging the template on a laptop.
 * lib/servicePage.ts loads this file only outside production. Real pages come from Sanity.
 * The words below are a hand-written sample, not the Page Publisher's output.
 */

let keySeed = 0;
const key = () => {
  keySeed += 1;
  return `k${keySeed}`;
};

/** One paragraph, heading or list item. Understands **bold** and [text](link). */
function block(text: string, style = 'normal', listItem?: 'bullet' | 'number') {
  const markDefs: { _key: string; _type: 'link'; href: string }[] = [];
  const children: { _type: 'span'; _key: string; text: string; marks: string[] }[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match = pattern.exec(text);
  while (match) {
    if (match.index > last) {
      children.push({ _type: 'span', _key: key(), text: text.slice(last, match.index), marks: [] });
    }
    if (match[1]) {
      children.push({ _type: 'span', _key: key(), text: match[1], marks: ['strong'] });
    } else {
      const linkKey = key();
      markDefs.push({ _key: linkKey, _type: 'link', href: match[3] });
      children.push({ _type: 'span', _key: key(), text: match[2], marks: [linkKey] });
    }
    last = match.index + match[0].length;
    match = pattern.exec(text);
  }
  if (last < text.length) {
    children.push({ _type: 'span', _key: key(), text: text.slice(last), marks: [] });
  }
  return {
    _type: 'block',
    _key: key(),
    style,
    markDefs,
    children,
    ...(listItem ? { listItem, level: 1 } : {}),
  };
}

const p = (text: string) => block(text);
const h3 = (text: string) => block(text, 'h3');
const ul = (items: string[]) => items.map((item) => block(item, 'normal', 'bullet'));

const roofingSeo: SanityServicePage = {
  _id: 'fixture-roofing-seo',
  title: 'Roofing SEO for Contractors Who Want More Calls',
  slug: { current: 'roofing-seo' },
  status: 'Published',
  targetKeyword: 'roofing seo',
  secondaryKeywords: [
    'seo for roofers',
    'local seo for roofing companies',
    'roofing seo services',
    'google business profile',
    'roofing leads',
    'roofing website',
  ],
  trade: 'Roofing',
  service: 'SEO',
  metaTitle: 'Roofing SEO for Contractors | Stone Systems',
  metaDescription:
    'Roofing SEO that gets your company found on Google and Google Maps: a website built for roofers, a page for every service and town, and reviews. No contracts.',
  publishDate: '2026-11-12',
  updatedDate: '2026-11-12',
  hero: {
    subheading:
      'When someone in your town searches for a roofer, your name should be one of the first they see. We build the website, the Google profile and the reviews that put you there.',
    picture: { path: '/images/trades/roofing.png', alt: 'A roofer working on a shingle roof' },
  },
  intro: {
    heading: 'What is roofing SEO?',
    text: 'Roofing SEO is the work that gets your roofing company found on Google when people near you search for a roofer. SEO stands for search engine optimization. It covers your website, your Google Business Profile and your reviews, so you show up on the map and in the results without paying for every click.',
    points: [
      'Built for roofers who get most jobs from word of mouth and want a second source.',
      'Covers Google Search, Google Maps and the AI answers above them.',
      'You own what gets built. It keeps working when you stop running ads.',
    ],
  },
  benefits: {
    heading: 'Why roofing SEO matters for your company',
    items: [
      {
        title: 'Calls from people who already need a roof',
        text: 'Nobody searches "roof repair near me" for fun. The person typing it has a leak or a claim and wants a roofer now. Showing up for that search beats chasing someone who was only scrolling.',
      },
      {
        title: 'You stop renting your leads',
        text: 'Paid leads stop the day you stop paying, and the same lead often goes to three other roofers. A page that ranks is yours. The calls it brings are yours alone.',
      },
      {
        title: 'Trust before the first call',
        text: 'A full Google profile with real reviews and photos of real jobs does the selling before you pick up the phone. The homeowner has already picked you.',
      },
      {
        title: 'Work in the slow season',
        text: 'Storms bring a rush. SEO brings the steady jobs in between: repairs, inspections, gutters, replacements planned for spring.',
      },
    ],
  },
  includes: {
    heading: 'What our roofing SEO service includes',
    intro: 'One system, set up for you. No pile of tools to learn.',
    items: [
      {
        icon: 'website',
        title: 'A website built for roofers',
        text: 'Fast on a phone, a call button on every screen, a short quote form, and photos of your own jobs. Built to get the call, not to win a design award.',
      },
      {
        icon: 'content',
        title: 'A page for every service and every town',
        text: 'Roof repair, roof replacement, metal roofing, storm damage, commercial roofing. Then a page for each town you work in. That is how Google knows what you do and where.',
      },
      {
        icon: 'map',
        title: 'Your Google Business Profile, set up right',
        text: 'The right categories, services, service areas, hours and photos. This profile is what puts you on Google Maps.',
      },
      {
        icon: 'star',
        title: 'More reviews, without the awkward ask',
        text: 'After each job your customer gets a text with a link to leave a review. More recent reviews help you rank and help you close.',
      },
      {
        icon: 'search',
        title: 'On-page and technical SEO',
        text: 'Titles, headings, speed, mobile layout, the code that tells Google you are a roofing company, and listings that match your name, address and phone everywhere.',
      },
      {
        icon: 'report',
        title: 'A monthly report in plain words',
        text: 'Which searches you show up for, how many people found you, and what we are working on next. No jargon.',
      },
    ],
  },
  process: {
    heading: 'How roofing SEO works with us',
    steps: [
      {
        title: 'We look at where you stand',
        text: 'On a short call we open your website and your Google profile with you and show you what Google sees today.',
      },
      {
        title: 'We build the foundation',
        text: 'Your website, your service pages, your town pages and your Google Business Profile, set up and connected.',
      },
      {
        title: 'Reviews start coming in',
        text: 'Every finished job sends a review request by text. Your profile fills up with recent, real reviews.',
      },
      {
        title: 'We report and adjust',
        text: 'Each month you see the numbers. We add pages and fix what is holding you back.',
      },
    ],
  },
  infographic: {
    title: 'Where a roofer can show up on Google',
    caption: 'One search, four places. Roofing SEO works on the last three.',
    items: [
      {
        label: 'Paid ads',
        text: 'Top of the page. You pay for each click or lead, and it stops the day you stop paying.',
      },
      {
        label: 'AI answer',
        text: 'A short written answer that names a few companies. It reads your pages, your profile and your reviews.',
      },
      {
        label: 'Google Maps (the map pack)',
        text: 'Three local companies with their stars and a call button. Your Google Business Profile and your reviews put you here.',
        highlight: true,
      },
      {
        label: 'Regular results',
        text: 'The list of websites under the map. Your service pages and town pages put you here.',
      },
    ],
  },
  sections: [
    {
      heading: 'Local SEO for roofing companies: the map comes first',
      body: [
        p(
          'A roofer does not need to be found across the country. You need to be found in the towns you drive to. That is local SEO, and for a roofing company it is most of the job.'
        ),
        p(
          'When someone searches "roofer near me", Google shows a map with three companies before the regular results. Google says it picks those three on [relevance, distance and prominence](https://support.google.com/business/answer/7091). In plain words: does your profile match the search, how close are you, and how well known are you online.'
        ),
        p('You cannot move your shop. You can work on the other two:'),
        ...ul([
          '**Relevance:** a complete Google Business Profile with the right category, every service listed and a website that says the same thing.',
          '**Prominence:** reviews that keep coming, photos of recent jobs, and your name, address and phone matching on every listing.',
        ]),
        p(
          'This is where we start with every roofer, because the map is where a local buyer looks first. See how we handle [local SEO](/features/seo) for contractors.'
        ),
      ],
    },
    {
      heading: 'SEO for roofers starts with the right keywords',
      body: [
        p(
          'A keyword is what your customer types. The ones worth going after are a service plus a place, because that person is ready to hire.'
        ),
        ...ul([
          'roof repair in (your town)',
          'roof replacement near me',
          'metal roofing contractor',
          'storm damage roof repair',
          'commercial roofing company',
          'emergency roof leak repair',
        ]),
        p(
          'Each of those needs its own page. One page that lists everything you do will not rank for any of it. A roofing website with a separate page for every service and every town gives Google a clear match for each search.'
        ),
        h3('Services times towns'),
        p(
          'Count your services. Count the towns you work in. Multiply them. That is how many searches you could be found for. Most roofing websites cover one: the company name.'
        ),
      ],
    },
    {
      heading: 'What we fix on your roofing website',
      body: [
        p(
          'A website can look good and still bring no calls. These are the things we check first, and they are the same things Google lists in its own [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).'
        ),
        ...ul([
          '**Page titles and headings** that say the service and the town, not "Home" or "Welcome".',
          '**Speed on a phone.** Most people looking for a roofer are on one.',
          '**A call button and a short form** on every page, so nobody has to hunt for your number.',
          '**Your own photos** with a short description, instead of stock pictures.',
          '**Clean code behind the page** that tells Google your business name, your service area and your reviews.',
        ]),
        p(
          'If your current site cannot do this, we build you a [website made for contractors](/features/functional-website). If someone calls while you are on a roof, [missed-call text back](/features/missed-call-text-back) answers them for you so the lead does not go to the next roofer.'
        ),
      ],
    },
    {
      heading: 'Reviews: the part of roofing SEO most roofers skip',
      body: [
        p(
          'Ask a roofer how they get work and the answer is word of mouth. Reviews are word of mouth that Google can read.'
        ),
        p(
          'A profile with a steady flow of recent reviews ranks better on the map and gets more calls than one with a handful from three years ago. The hard part is asking. So we make the ask automatic: when a job is done, your customer gets a text with a link. See how the [5-star review funnel](/features/5-star-magic-funnel) works.'
        ),
      ],
    },
    {
      heading: 'Roofing SEO and AI search',
      body: [
        p(
          'More people now get an answer written by AI at the top of Google, or ask a chat tool who to call. Those tools do not make companies up. They read websites, Google profiles and reviews, then name a few.'
        ),
        p(
          'So the work is the same: clear pages that say what you do and where, a complete profile, and real reviews. A roofing company that is easy for Google to understand is easy for AI to recommend.'
        ),
      ],
    },
    {
      heading: 'How much does roofing SEO cost?',
      body: [
        p(
          'It depends on two things: how many services and towns you want to be found for, and how much of the foundation you already have. A roofer with a good website and a full profile needs less than one starting from nothing.'
        ),
        p('What you are paying for is simple:'),
        ...ul([
          'the website and the pages on it',
          'your Google Business Profile, set up and kept up to date',
          'the review requests after each job',
          'a report each month',
        ]),
        p(
          'We keep it affordable on purpose and we do not use contracts. If it works, you stay. Book a call and we will tell you the price straight.'
        ),
      ],
    },
  ],
  relatedServices: [
    {
      label: 'Contractor websites',
      path: '/features/functional-website',
      text: 'A site built to get the call.',
    },
    {
      label: 'Local SEO',
      path: '/features/seo',
      text: 'On-site, off-site and Google profile work.',
    },
    {
      label: '5-star review funnel',
      path: '/features/5-star-magic-funnel',
      text: 'Review requests sent for you after each job.',
    },
    {
      label: 'Missed-call text back',
      path: '/features/missed-call-text-back',
      text: 'A text goes out when you cannot pick up.',
    },
    {
      label: 'Automated lead follow-up',
      path: '/features/automated-lead-follow-up',
      text: 'Every new lead hears from you fast.',
    },
    {
      label: 'Marketing campaigns',
      path: '/features/marketing-campaigns',
      text: 'Reach past customers in one click.',
    },
  ],
  faq: [
    {
      question: 'What is roofing SEO?',
      answer:
        'Roofing SEO is the work that gets a roofing company found on Google and Google Maps when people nearby search for a roofer. It covers the website, the Google Business Profile and the reviews.',
    },
    {
      question: 'Does SEO work for roofing companies?',
      answer:
        'Yes, when it is built around the towns you work in. People search for a roofer when they need one, so a company that shows up on the map and in the results gets calls from people ready to hire. It is not magic, and it works best next to the other ways you already get work.',
    },
    {
      question: 'How long does roofing SEO take to work?',
      answer:
        'It depends on your town, your competition and where you start. This is work that builds over months, not days. You get a report each month so you can see which way it is going.',
    },
    {
      question: 'How much does roofing SEO cost?',
      answer:
        'It depends on how many services and towns you want to be found for and how much is already in place. We keep it affordable and we do not use contracts. Book a call and we will tell you the price straight.',
    },
    {
      question: 'What is the difference between Google Maps and the regular results?',
      answer:
        'The map shows three local companies, picked mostly from their Google Business Profile and reviews. The regular results are websites, picked from the pages on them. A roofer needs both, and they help each other.',
    },
    {
      question: 'Do I need a new website for roofing SEO?',
      answer:
        'Not always. If your site is fast, works on a phone and has a page for each service and town, we work with it. If it is one page with your name and a phone number, a new one is the faster way.',
    },
    {
      question: 'Can I do roofing SEO myself?',
      answer:
        'You can. Fill in your Google Business Profile, ask every customer for a review, and add a page for each service. Most roofers hand it off because it takes time away from the jobs.',
    },
    {
      question: 'Do you lock me into a contract?',
      answer: 'No. We do not use contracts. If you are happy, you stay.',
    },
  ],
};

export const SERVICE_PAGE_FIXTURES: SanityServicePage[] = [roofingSeo];
