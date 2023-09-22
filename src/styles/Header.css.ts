import { style } from '@vanilla-extract/css';
import { fontSizes } from '@/styles/globals.css';
import { gray } from '@radix-ui/colors';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const h1 = style({
  fontSize: fontSizes['base+6'],
});

export const koreanName = style({
  fontSize: fontSizes.base,
});

export const infoLink = style({
  color: gray.gray12,

  fontWeight: 500,

  marginTop: 4,

  ':hover': {
    textDecoration: 'underline',
  },
});
