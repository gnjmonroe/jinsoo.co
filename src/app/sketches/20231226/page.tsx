'use client';

import dynamic from 'next/dynamic';
import React, { useEffect, type FC } from 'react';
import { frames } from './data';
import * as styles from './page.css';

const NoSsrGlassblock = dynamic(() => import('./components/Glassblock.tsx'), {
  ssr: false,
});

const Index: FC = () => {
  // set html and body styles for this route
  useEffect(() => {
    if (window.location.pathname === '/sketches/20231226') {
      const body = document.getElementsByTagName('body')[0];
      const html = document.documentElement;

      body.style.width = '100%';
      body.style.height = '100%';
      body.style.display = 'flex';
      html.style.width = '100%';
      html.style.height = '100%';
      html.style.display = 'flex';
    }
  }, []);

  return (
    <main className={styles.root}>
      {frames.map((frame) => (
        <NoSsrGlassblock frameData={frame} key={frame.blockIndex} />
      ))}
    </main>
  );
};

export default Index;
