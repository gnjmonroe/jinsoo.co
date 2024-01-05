import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'relative',

  height: '100vh',
});

export const button = style({
  position: 'absolute',
  top: 16,
  left: '50%',
  padding: '1px 8px',
  transform: 'translate(-50%, 0)',
});

export const svg = style({
  width: '100%',
  maxWidth: '100vh',
  aspectRatio: '1',
});

export const fadeGroup = styleVariants({
  true: {
    opacity: 0,
  },
  false: {
    opacity: 1,
    transition: 'opacity .5s ease-out',
  },
});

export const foreignObjectRoot = style({
  backgroundColor: 'white',
  boxShadow: '2px 2px 4px 2px #00000016',

  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: '6px 8px',
  border: '1px solid #000',
  borderRadius: 2,
});

export const foSpan = style({
  color: '#000',

  display: 'inline-flex',
});
