import React from 'react';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gregory Nathan Jinsoo Monroe',
  description: 'I am a frontend engineer in Seoul',
  openGraph: {
    title: 'Gregory Nathan Jinsoo Monroe',
    url: 'https://www.jinsoo.co',
    type: 'website',
    description: 'I am a frontend engineer in Seoul.',
    locale: 'en-US',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <head>
      <link
        rel='stylesheet'
        as='style'
        crossOrigin=''
        href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
      />
    </head>
    <body>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
