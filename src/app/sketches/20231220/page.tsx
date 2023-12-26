'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Points, Lines, type LineProps, type PointProps } from './components';
import * as styles from './page.css';

const pointRadius = 22;
const pointDiameter = pointRadius * 2;
const pointColors = ['#C1F0FF', '#FFD6E5', '#D7FFBE', '#FFFF9A'];

const getLineLength = (
  point1: PointProps['coords'],
  point2: PointProps['coords']
) => {
  const [x1, y1] = point1;
  const [x2, y2] = point2;

  return Math.hypot(x2 - x1, y2 - y1);
};

const Index = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [points, setPoints] = useState<PointProps[]>([]);
  const [lines, setLines] = useState<LineProps[]>([]);

  const getRandomCoords = () => {
    if (!rootRef.current) return [0, 0];

    const xCoord = Math.floor(
      Math.random() * (rootRef.current.clientWidth - pointDiameter) +
        pointRadius
    );
    const yCoord = Math.floor(
      Math.random() * (rootRef.current.clientHeight - pointDiameter) +
        pointRadius
    );

    return [xCoord, yCoord];
  };

  useEffect(() => {
    if (window.location.pathname === '/sketches/20231220') {
      const body = document.getElementsByTagName('body')[0];

      body.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    rootRef.current.style.opacity = '1';

    setPoints(
      pointColors.map((color) => {
        const coords = getRandomCoords();

        return {
          coords,
          center: [coords[0] + pointRadius, coords[1] + pointRadius],
          color,
          width: rootRef.current!.clientWidth,
          height: rootRef.current!.clientHeight,
        };
      })
    );
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;

    const tempLines = [];
    for (let i = 0; i < points.length - 1; i += 1) {
      for (let j = i + 1; j < points.length; j += 1) {
        tempLines.push({
          x1: points[i].coords[0],
          y1: points[i].coords[1],
          x2: points[j].coords[0],
          y2: points[j].coords[1],
          key: `${i}${j}`,
          width: rootRef.current.clientWidth,
          height: rootRef.current.clientHeight,
          length: getLineLength(points[i].coords, points[j].coords),
          displayLength: Math.floor(
            getLineLength(points[i].coords, points[j].coords)
          ),
        });
      }
    }

    setLines(tempLines);
  }, [points]);

  return (
    <main className={styles.root} ref={rootRef}>
      <Lines className={styles.svgLayer} lines={lines} />
      <Points
        className={styles.svgLayer}
        pointsData={points}
        radiusValue={pointRadius}
      />
    </main>
  );
};

export default Index;
