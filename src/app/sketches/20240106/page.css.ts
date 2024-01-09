import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  height: '100vh',
  padding: '1rem',
});

export const button = style({
  backgroundColor: 'transparent',

  fontSize: '1rem',

  width: '100%',
  border: '1px solid black',
  borderRadius: 2,
  padding: '3px 8px',
});

export const dialog = style({
  background: 'none',

  border: 'none',
  padding: '1rem',

  selectors: {
    '&[open]': {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',

      width: '100%',
      height: '100vh',
      maxWidth: 'unset',
      maxHeight: 'unset',
    },

    '&::backdrop': {
      background: 'rgba(255, 255, 255, .7)',
      backdropFilter: 'blur(10px)',
    },
  },
});

export const methods = style({
  flex: 1,
  listStyle: 'none',
  overflowY: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '.75rem',
});

export const method = style({
  width: 'fit-content',
});
export const methodButton = style({
  background: 'yellow',

  fontSize: '3rem',
  fontWeight: 400,

  display: 'inline-flex',

  width: '100%',
  border: 'none',
  borderRadius: 'unset',
  paddingBlock: 'unset',
  paddingInline: 'unset',
  padding: '1px 12px',
});

export const svg = style({
  aspectRatio: '1',

  width: 300,
  margin: 'auto',
  border: '1px solid #555',
  padding: 1,
});
