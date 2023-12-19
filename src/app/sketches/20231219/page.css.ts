import { style } from '@vanilla-extract/css';

export const root = style({
  backgroundColor: '#333',
  display: 'grid',
  placeContent: 'center',

  height: '100vh',
});

const typography = style({
  textAlign: 'right',
  whiteSpace: 'pre-line',
  lineHeight: 1.1,
  fontSize: '3rem',
  fontWeight: 600,
  transform: 'scale(-1, 1)',
});

export const text = style([typography, { zIndex: 2, color: 'white' }]);

export const refraction = style([
  typography,
  {
    color: '#59f1ff',

    userSelect: 'none',

    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%), scale(-1, 1)',
    transition: 'transform .1s linear',
  },
]);
