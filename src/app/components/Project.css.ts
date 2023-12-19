import { style } from '@vanilla-extract/css';
import { gray } from '@radix-ui/colors';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,

  textDecoration: 'none',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const name = style({
  fontSize: 'clamp(1.125rem, 0.976rem + 0.746vw, 1.313rem)',

  selectors: {
    '&::before': {
      content: '↗ ',
      verticalAlign: 'text-top',
      fontSize: 12,
    },
    [`${root}:hover &`]: {
      textDecoration: 'underline',
    },
  },
});

export const year = style({
  color: gray.gray11,

  fontSize: 'clamp(.625rem, 0.426rem + .993vw, .875rem)',
  fontWeight: 400,
});

export const description = style({
  color: gray.gray11,
  fontSize: 'clamp(.688rem, 0.54rem + .742vw, .875rem)',
  fontWeight: 400,

  maxWidth: '66ch',
});
