import React, { FC } from 'react';

export interface LineProps {
  width: number | undefined;
  height: number | undefined;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  length: number;
  displayLength: number;
  key: string;
}

export const Line: FC<{ line: LineProps }> = ({ line }) => {
  const { x1, x2, y1, y2 } = line;

  return (
    <line
      x1={`${x1}`}
      y1={`${y1}`}
      x2={`${x2}`}
      y2={`${y2}`}
      stroke='#777'
      strokeWidth={1}
    />
  );
};

export default Line;
