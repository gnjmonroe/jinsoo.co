import React from 'react';
import { getAnimateValuesString } from './utils';
import { consts } from './consts';

const keyframes = {
  from: {
    x: consts.viewBox.width / 4,
    y: consts.viewBox.height / 4,
    skewX: '0',
    skewY: '0',
  },
  to: {
    x: -(consts.viewBox.width - 282.78) / 2,
    y: (consts.viewBox.height - 233.45) / 2,
    skewX: '30',
    skewY: '30',
  },
};

export const Skew = () => (
  <rect
    x={keyframes.from.x}
    y={keyframes.from.y}
    width={consts.viewBox.width / 2}
    height={consts.viewBox.height / 2}
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
    <animateTransform
      attributeName='transform'
      type='skewX'
      from={keyframes.from.skewX}
      to={keyframes.to.skewX}
      dur={consts.animationDuration}
      additive='sum'
      repeatCount='indefinite'
    />
    <animateTransform
      attributeName='transform'
      type='skewY'
      from={keyframes.from.skewY}
      to={keyframes.to.skewY}
      dur={consts.animationDuration}
      additive='sum'
      repeatCount='indefinite'
    />
  </rect>
);
