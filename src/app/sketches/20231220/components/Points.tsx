import React, { FC, SVGProps } from 'react';

export interface PointType extends SVGProps<SVGSVGElement> {
  coords: number[];
  center: number[];
  color: string;
  width: number;
  height: number;
}

interface PointsProps extends SVGProps<SVGSVGElement> {
  pointsData: PointType[] | undefined;
  radiusValue: number;
}

export const Points: FC<PointsProps> = ({
  pointsData,
  radiusValue,
  ...props
}) => {
  if (!pointsData || !pointsData.length) return null;

  const { height, width } = pointsData[0];

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <svg
      viewBox={`0 0 ${width} ${height}`}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      {pointsData.map((point) => (
        <circle
          fill={point.color}
          cx={point.coords[0]}
          cy={point.coords[1]}
          r={radiusValue}
          stroke='#777'
          key={`${point.coords.map((coord) => coord).join('')}`}
        />
      ))}
    </svg>
  );
};

export default Points;
