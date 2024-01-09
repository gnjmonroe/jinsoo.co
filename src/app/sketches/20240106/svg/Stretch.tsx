import React from 'react';
import { consts } from './consts';
import { getAnimateValuesString } from './utils';

const keyframes = {
  from: {
    x: consts.viewBox.width / 2,
    y: consts.viewBox.height / 3,
    width: 0,
    height: consts.viewBox.height / 3,
  },
  to: {
    x: 0,
    y: (consts.viewBox.height - consts.viewBox.height / 4) / 2,
    width: consts.viewBox.width,
    height: consts.viewBox.height / 4,
  },
};

export const Stretch = () => (
  <rect
    x={keyframes.from.x}
    y={keyframes.from.y}
    width={keyframes.from.width}
    height={keyframes.from.height}
    rx={4}
    fill='#000'
  >
    <animate
      attributeName='x'
      values={getAnimateValuesString(keyframes.from.x, keyframes.to.x)}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
    <animate
      attributeName='y'
      values={getAnimateValuesString(keyframes.from.y, keyframes.to.y)}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
    <animate
      attributeName='width'
      values={getAnimateValuesString(keyframes.from.width, keyframes.to.width)}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
    <animate
      attributeName='height'
      values={getAnimateValuesString(
        keyframes.from.height,
        keyframes.to.height,
      )}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
  </rect>
);
