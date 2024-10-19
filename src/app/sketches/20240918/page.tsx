'use client';

import React, { useRef, useEffect } from 'react';
import * as styles from './page.css';

const Index = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    /**
     * by default, canvas is 300px x 150px.
     * many devices can support at least 10,000px x 10,000px,
     * but iOS support up to 4096px x 4096px
     */
    canvas.width = Math.min(window.innerWidth, 4096);
    canvas.height = Math.min(window.innerHeight, 4096);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelW = canvas.width / 12;
    for (let i = 0; i < canvas.width; i += pixelW) {
      const heights = Array.from(
        { length: 12 },
        (_, idx) => canvas.height / 2 ** idx,
      ).filter((v) => v >= 1);
      const pixelH = heights[Math.floor(Math.random() * heights.length)];
      for (let j = 0; j < canvas.height; j += pixelH) {
        const v = Math.floor(Math.random() * 256);
        ctx.fillStyle = `rgb(${v} ${v} ${v})`;
        const rectangle = new Path2D();
        rectangle.rect(i, j, pixelW, pixelH);
        ctx.fill(rectangle);
      }
    }
  });

  return (
    <main className={styles.root}>
      <canvas ref={canvasRef} style={{ opacity: false ? 0 : 100 }}>
        HTML Canvas
      </canvas>
    </main>
  );
};

export default Index;
