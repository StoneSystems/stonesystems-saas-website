'use client';

import { Container } from '@mantine/core';
import Script from 'next/script';

export function CalendarPopup() {
  return (
    <>
      <Container size="xl">
        <iframe
          title="Book a call"
          src="https://link.stonesystems.io/widget/booking/hUF685Mpy55WxvsB3UV1"
          style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
          scrolling="no"
          id="hUF685Mpy55WxvsB3UV1_1723761228001"
        />
        <Script
          strategy="beforeInteractive"
          src="https://api.ezclick.io/js/form_embed.js"
          type="text/javascript"
        />
      </Container>
    </>
  );
}
