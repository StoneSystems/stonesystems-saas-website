'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { OurProcessSection } from '@/components/ProcessSection/OurProcessSection';
import { CTA } from '@/components/CTA-Wave/CTA';
import { TestimonialSection } from '@/components/TestimonialSection/TestimonialSection';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { CTANoWave } from '../CTA-No-Wave/CTA';

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const shouldShowOurProcessSection = !['/about-us', '/careers', '/'].includes(pathname);

  const showNothing = ['/vsl'].includes(pathname);

  return (
    <>
      <Header />
      {children}
      {!showNothing && (
        <>
          {shouldShowOurProcessSection ? <CTA /> : <CTANoWave />}
          {shouldShowOurProcessSection && <OurProcessSection />}
          <TestimonialSection />
        </>
      )}
      <Footer />
    </>
  );
};
