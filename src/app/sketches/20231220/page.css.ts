import { style } from '@vanilla-extract/css';

export const root = style({
  height: '100vh',
  position: 'relative',
  opacity: 0,
  transition: 'opacity .6s ease-out',
});

export const svgLayer = style({
  position: 'absolute',
});
