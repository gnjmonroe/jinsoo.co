import React from 'react';
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => (
  <>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default App;
