import { Metadata } from 'next';
import { Caveat } from 'next/font/google';
import { CareersHero } from '@/components/CareersPage/CareersHero';
import { OpenRolesSection } from '@/components/CareersPage/OpenRolesSection';
import { ValuesSection } from '@/components/CareersPage/ValuesSection';
import { HiringStepsSection } from '@/components/CareersPage/HiringStepsSection';
import { FounderLetterSection } from '@/components/CareersPage/FounderLetterSection';
import { getHiringContent } from '@/lib/hiring';
import classes from '@/components/CareersPage/Careers.module.css';

// The handwritten signature font, loaded for this page only (decision 45).
const signatureFont = Caveat({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
  variable: '--font-signature',
});

// Re-read hiring.stonesystems.io at most every 5 minutes (decision 42). Literal on purpose so Next
// can always read it; keep equal to HIRING_REVALIDATE_SECONDS in lib/hiring.ts.
export const revalidate = 300;

export const metadata: Metadata = {
  title: 'Stone Systems - Careers',
  description:
    'Open roles at Stone Systems. Remote, full-time, working with contractors across the US and Canada.',
};

export default async function CareersPage() {
  const { content } = await getHiringContent();

  return (
    <div className={`${signatureFont.variable} ${classes.page}`}>
      <CareersHero title={content.hero.title} subtitle={content.hero.subtitle} />
      <OpenRolesSection title={content.openings.title} roles={content.openings.roles} />
      <ValuesSection title={content.values.title} items={content.values.items} />
      <HiringStepsSection title={content.process.title} steps={content.process.steps} />
      <FounderLetterSection {...content.letter} />
    </div>
  );
}
