import React from 'react';
import { getAnimateValuesString } from './utils';
import { consts } from './consts';

const keyframes = {
  from: {
    x: 0,
    y: (consts.viewBox.height / 2) * (1 - 1 / 3),
    width: consts.viewBox.width / 3,
    height: consts.viewBox.height / 3,
  },
  to: {
    x: consts.viewBox.width - consts.viewBox.width / 3,
  },
};

export const Shift = () => (
  <rect
    x={keyframes.from.x}
    y={keyframes.from.y}
    width={keyframes.from.width}
    height={keyframes.from.height}
    fill='#000'
  >
    <animate
      attributeName='x'
      values={getAnimateValuesString(keyframes.from.x, keyframes.to.x)}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
  </rect>
);
