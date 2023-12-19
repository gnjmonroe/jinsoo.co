'use client';

import React, { useRef } from 'react';
import * as styles from './page.css';
/*
 * notes:
 * - dvh support doesn't seem to work
 * - refraction quality is too flat/dull, blend modes might be the solution
 * - transition is set to linear but feels to stiff, easing might help, but the solution probably involves delays
 * */

const defaultText = `
    Gates A1 to A72
    Concourses B and C
    Terminal
`;

const Index = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const refractionRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rootRef.current || !refractionRef.current) return;

    const mirroredTop = rootRef.current.clientHeight - e.clientY;
    const mirroredLeft = rootRef.current.clientWidth - e.clientX;

    refractionRef.current.style.top = `${
      mirroredTop - refractionRef.current.clientHeight / 2
    }px`;
    refractionRef.current.style.left = `${
      mirroredLeft - refractionRef.current.clientWidth / 2
    }px`;
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
