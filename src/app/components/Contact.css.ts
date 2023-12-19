import { style } from '@vanilla-extract/css';
import { red } from '@radix-ui/colors';

// clamps are set to min: 320px, max: 723px

export const contact = style({
  textDecoration: 'none',
  fontSize: 'clamp(1.125rem, 0.976rem + 0.746vw, 1.313rem)',

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

export default contact;
