import React from 'react';
import { consts } from './consts';

const keyframes = {
  from: `0 ${consts.viewBox.width / 2} ${consts.viewBox.height / 2}`,
  to: `360 ${consts.viewBox.width / 2} ${consts.viewBox.height / 2}`,
};

export const Rotate = () => (
  <rect
    x={(consts.viewBox.width / 2) * (1 - 0.5)}
    y={(consts.viewBox.height / 2) * (1 - 1 / 3)}
    width={consts.viewBox.width / 2}
    height={consts.viewBox.height / 3}
    fill='#000'
  >
    <animateTransform
      attributeName='transform'
      type='rotate'
      from={keyframes.from}
      to={keyframes.to}
      dur={consts.animationDuration}
      repeatCount='indefinite'
    />
  </rect>
);
