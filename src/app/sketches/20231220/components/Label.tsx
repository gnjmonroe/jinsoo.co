import React, { useRef, useState, useEffect, FC } from 'react';
import { LineProps } from './Line';

export const settings = {
  rect: {
    zIndex: 2,
    padding: {
      x: 7,
      y: 1,
    },
  },
};
export const Label: FC<{ line: LineProps }> = ({ line }) => {
  const { x1, x2, y1, y2, length, displayLength } = line;
  const textRef = useRef<SVGTextElement | null>(null);
  const [svgTextWidth, setSvgTextWidth] = useState(0);
  const [svgTextHeight, setSvgTextHeight] = useState(0);

  const midPointX = Math.abs(x2 - x1) / 2 + Math.min(x1, x2);
  const midPointY = Math.abs(y2 - y1) / 2 + Math.min(y1, y2);
  const hypotenuse = length;
  const rotationSign =
    Math.sign((x2 - x1) * (y2 - y1)) > 0
      ? 1
      : Math.sign((x2 - x1) * (y2 - y1)) < 0
        ? -1
        : 0;
  const rotationMagnitude = Math.asin(Math.abs(y2 - y1) / hypotenuse);
  const rotationValue = rotationMagnitude * (180 / Math.PI) * rotationSign;

  useEffect(() => {
    if (!textRef.current) return;

    const textRefBBox = textRef.current.getBBox();
    setSvgTextWidth(textRefBBox.width);
    setSvgTextHeight(textRefBBox.height);
  }, []);

  return (
    <>
      <rect
        x={midPointX - svgTextWidth / 2 - settings.rect.padding.x}
        y={midPointY - svgTextHeight / 2 - settings.rect.padding.y}
        rx={8}
        ry={8}
        transform={`rotate(${rotationValue} ${midPointX} ${midPointY})`}
        fill='white'
        width={svgTextWidth + settings.rect.padding.x * 2}
        height={svgTextHeight + settings.rect.padding.y * 2}
        style={{ zIndex: settings.rect.zIndex }}
        stroke='#777'
      />
      <text
        x={midPointX}
        y={midPointY}
        textAnchor='middle'
        dominantBaseline='central'
        transform={`rotate(${rotationValue} ${midPointX} ${midPointY})`}
        ref={textRef}
        fontSize={12}
        letterSpacing={1}
        fill='#777'
        style={{ fontWeight: 500 }}
      >
        {displayLength}
      </text>
    </>
  );
};

export default Label;
