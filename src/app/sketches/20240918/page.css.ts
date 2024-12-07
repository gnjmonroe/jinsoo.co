import { style } from '@vanilla-extract/css';

export const root = style({
  backgroundColor: 'white',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh',
});
