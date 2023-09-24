import { style } from '@vanilla-extract/css';
import { gray, red } from '@radix-ui/colors';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'clamp(2rem, 1.206rem + 3.97vw, 3rem)',

  width: 'fit-content',

  height: '100%',
  minHeight: '100vh',
  margin: '0px auto',
  padding:
    'clamp(1.125rem, -0.066rem + 5.955vw, 2.625rem) clamp(1rem, 0.206rem + 3.97vw, 2rem)',
});

export const header = style({
  maxWidth: 659,
});
export const mainName = style({
  fontSize: 'clamp(1.125rem, 0.976rem + 0.744vw, 1.313rem)',
});
export const subName = style({
  color: gray.gray11,

  fontSize: 'clamp(0.875rem, 0.776rem + 0.496vw, 1rem)',
  lineHeight: 1,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 'clamp(1.5rem, 1.103rem + 1.985vw, 2rem)',

  maxWidth: 659,
});
export const about = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});
export const aboutP = style({
  fontWeight: 400,
  fontSize: 'clamp(1.125rem, 0.976rem + 0.744vw, 1.313rem)',
});

export const contacts = style({
  display: 'flex',
  gap: 'clamp(1rem, 0.206rem + 3.97vw, 2rem)',

  maxWidth: 659,
  paddingBottom: 24,
});
export const contact = style({
  textDecoration: 'none',
  fontSize: 'clamp(1.125rem, 0.976rem + 0.744vw, 1.313rem)',

  ':hover': {
    textDecoration: 'underline',
  },
  ':visited': {
    color: red.red11,
  },

  selectors: {
    '&::before': {
      content: '↗ ',
      verticalAlign: 'text-top',
      fontSize: 12,
    },
  },
});
