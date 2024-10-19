import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'clamp(2rem, 1.206rem + 3.97vw, 3rem)',

  width: 'fit-content',

  height: '100%',
  minHeight: '100vh',
  padding:
    'clamp(1.125rem, -0.066rem + 5.955vw, 2.625rem) clamp(1rem, 0.206rem + 3.97vw, 2rem)',
});

export const ol = style({
  listStyle: 'none',
});

export const link = style({
  display: 'block',
  width: 'fit-content',
});
