import React, { FC, SVGProps } from 'react';
import { Label } from './Label';
import { Line, type LineProps } from './Line';

export interface LinesProps extends SVGProps<SVGSVGElement> {
  lines: LineProps[] | undefined;
}

export const Lines: FC<LinesProps> = ({ lines, ...props }) => {
  if (!lines || !lines.length) return null;

  const { width, height } = lines[0];

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      {lines.map((line) => (
        <Line line={line} key={line.key} />
      ))}
      {lines.map((line) => (
        <Label line={line} key={line.key} />
      ))}
    </svg>
  );
};

export default Lines;
