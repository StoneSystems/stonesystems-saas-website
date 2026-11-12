// Stone Systems — Service Page Schema (the pages under /trades/<slug>)
// Place this file in your Sanity Studio schemas folder and register it in index.ts
// The site reads this type in lib/servicePage.ts. The content engine's Page Publisher writes it.

const required = (Rule: any) => Rule.required();

const titleAndText = (name: string, title: string, extra: any[] = []) => ({
  name,
  title,
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: required },
        { name: 'text', title: 'Text', type: 'text', rows: 3, validation: required },
        ...extra,
      ],
    },
  ],
});

export const servicePage = {
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (the H1, holds the keyword)',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug (the page lives at /trades/<slug>)',
      type: 'slug',
      options: { source: 'targetKeyword', maxLength: 96 },
      validation: required,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['Draft', 'Published'], layout: 'radio' },
      initialValue: 'Draft',
      validation: required,
    },
    { name: 'targetKeyword', title: 'Target Keyword', type: 'string', validation: required },
    {
      name: 'secondaryKeywords',
      title: 'Secondary Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'trade',
      title: 'Trade (as the Trades page names it, e.g. Roofing)',
      type: 'string',
      validation: required,
    },
    { name: 'service', title: 'Service (e.g. SEO)', type: 'string', validation: required },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule: any) => Rule.max(60),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(160),
    },
    { name: 'publishDate', title: 'Publish Date', type: 'date' },
    { name: 'updatedDate', title: 'Updated Date', type: 'date' },
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'subheading', title: 'Sub-heading', type: 'text', rows: 3, validation: required },
        {
          name: 'picture',
          title: 'Picture',
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'alt', title: 'Alternative Text', type: 'string', validation: required },
          ],
        },
      ],
    },
    {
      name: 'intro',
      title: 'Intro (the short answer, 40 to 60 words)',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string', validation: required },
        { name: 'text', title: 'Text', type: 'text', rows: 4, validation: required },
        { name: 'points', title: 'Short points', type: 'array', of: [{ type: 'string' }] },
      ],
    },
    {
      name: 'benefits',
      title: 'Why it matters',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string', validation: required },
        titleAndText('items', 'Benefits'),
      ],
    },
    {
      name: 'includes',
      title: 'What our service includes',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string', validation: required },
        { name: 'intro', title: 'Intro', type: 'text', rows: 2 },
        titleAndText('items', 'Included', [
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
              list: [
                'map',
                'star',
                'website',
                'search',
                'report',
                'phone',
                'content',
                'link',
                'check',
              ],
            },
          },
        ]),
      ],
    },
    {
      name: 'process',
      title: 'How it works',
      type: 'object',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string', validation: required },
        titleAndText('steps', 'Steps'),
      ],
    },
    {
      name: 'infographic',
      title: 'Infographic (drawn by the page from these rows)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string', validation: required },
        { name: 'caption', title: 'Caption', type: 'text', rows: 2 },
        {
          name: 'items',
          title: 'Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string', validation: required },
                { name: 'text', title: 'Text', type: 'text', rows: 2, validation: required },
                { name: 'highlight', title: 'Highlight this row', type: 'boolean' },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'sections',
      title: 'Body sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', title: 'Heading (H2)', type: 'string', validation: required },
            {
              name: 'body',
              title: 'Body',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H3', value: 'h3' },
                    { title: 'H4', value: 'h4' },
                    { title: 'Quote', value: 'blockquote' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [{ name: 'href', type: 'string', title: 'URL or path' }],
                      },
                    ],
                  },
                },
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [{ name: 'alt', title: 'Alternative Text', type: 'string' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'relatedServices',
      title: 'Related services (links to pages on this site)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: required },
            { name: 'path', title: 'Path (starts with /)', type: 'string', validation: required },
            { name: 'text', title: 'One line', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string', validation: required },
            { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: required },
          ],
        },
      ],
    },
    { name: 'videoUrl', title: 'Video URL (YouTube, optional)', type: 'url' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'targetKeyword' },
  },
};
