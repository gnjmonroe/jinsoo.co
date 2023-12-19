'use client';

import React, { useRef } from 'react';
import * as styles from './page.css';

const defaultText = `
    ✈️ Gates A1 to A72
    ✈️ Concourses B and C
    🅿️🚍🚖🧳💁 Terminal
`;

const Index = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const refractionRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rootRef.current || !refractionRef.current) return;

    const mirroredTop = rootRef.current.clientHeight - e.clientY;
    const mirroredLeft = rootRef.current.clientWidth - e.clientX;

    refractionRef.current.style.top = `${mirroredTop}px`;
    refractionRef.current.style.left = `${mirroredLeft}px`;
  };

  return (
    <main className={styles.root} ref={rootRef} onMouseMove={handleMouseMove}>
      <span className={styles.text}>{defaultText}</span>
      <span className={styles.refraction} ref={refractionRef}>
        {defaultText}
      </span>
    </main>
  );
};

export default Index;
