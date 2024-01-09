import React from 'react';
import { consts } from './consts';
import { getAnimateValuesString } from './utils';

const keyframes = {
  from: {
    rx: 150,
  },
  to: {
    rx: 0,
  },
};

export const Fill = () => (
  <rect
    x='0'
    y='0'
    width={`${consts.viewBox.width}`}
    height={consts.viewBox.height}
    rx={150}
    fill='#000'
  >
    <animate
      attributeName='rx'
      values={getAnimateValuesString(keyframes.from.rx, keyframes.to.rx)}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
  </rect>
);
