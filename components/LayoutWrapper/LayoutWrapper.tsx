'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { OurProcessSection } from '@/components/ProcessSection/OurProcessSection';
import { CTA } from '@/components/CTA-Wave/CTA';
import { TestimonialSection } from '@/components/TestimonialSection/TestimonialSection';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { StickyCta } from '@/components/StickyCta/StickyCta';
import { CTANoWave } from '../CTA-No-Wave/CTA';

interface LayoutWrapperProps {
  children: React.ReactNode;
  /** Server-rendered footer content (the Blog column) from the root layout. */
  footerBlog?: React.ReactNode;
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children, footerBlog }) => {
  const pathname = usePathname();

  const shouldShowOurProcessSection = !['/about-us', '/'].includes(pathname);

  // Careers (decision 18) and VSL show no CTA block and no testimonial carousel.
  const showNothing = ['/vsl', '/careers'].includes(pathname);

  return (
    <>
      <Header />
      <main>{children}</main>
      {!showNothing && (
        <>
          {shouldShowOurProcessSection ? <CTA /> : <CTANoWave />}
          {shouldShowOurProcessSection && <OurProcessSection />}
          <TestimonialSection />
        </>
      )}
      <Footer blogColumn={footerBlog} />
      <StickyCta />
    </>
  );
};
