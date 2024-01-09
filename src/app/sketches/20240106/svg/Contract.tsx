import React from 'react';
import { consts } from './consts';
import { getAnimateValuesString } from './utils';

const keyframes = {
  from: {
    x: 0,
    y: 0,
    width: consts.viewBox.width,
    height: consts.viewBox.height,
    rx: 0,
  },
  to: {
    x: consts.viewBox.width / 4,
    y: consts.viewBox.height / 4,
    width: consts.viewBox.width / 2,
    height: consts.viewBox.height / 2,
    rx: consts.viewBox.width / 4,
  },
};

export const Contract = () => (
  <rect
    x={keyframes.from.x}
    y={keyframes.from.y}
    width={keyframes.from.width}
    height={keyframes.from.height}
    rx={keyframes.from.rx}
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
    <animate
      attributeName='rx'
      values={getAnimateValuesString(keyframes.from.rx, keyframes.to.rx)}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
  </rect>
);
