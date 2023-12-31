import { style } from '@vanilla-extract/css';
import { colors, rootGridLength } from '../const';

export const root = style({
  backgroundColor: colors.background,
  background: `linear-gradient(0deg, rgba(195,208,250,0) 0%, rgba(195,208,250,1) 100%)`,
  overflowY: 'auto',
  justifySelf: 'center',
  alignSelf: 'center',

  display: 'flex',
  alignItems: 'flex-start',

  position: 'relative',
  boxSizing: 'border-box',

  aspectRatio: '1',

  '::before': {
    content: '',
    background: `linear-gradient(0deg, rgba(241,231,229,1) 0%, rgba(241,231,229,0) 100%)`,

    position: 'absolute',
    bottom: '0%',

    width: '100%',
    height: '43%',
  },

  '@media': {
    'screen and (orientation: portrait)': {
      width: rootGridLength.portrait,
    },
    'screen and (orientation: landscape)': {
      width: rootGridLength.landscape,
    },
  },
});

export const barcode = style({
  zIndex: 4,
  backgroundColor: colors.blowout,
  overflowY: 'auto',
  overflowX: 'hidden',

  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  top: '10%',
  right: '10%',

  width: '60%',
  height: '19%',
  borderTop: '1px solid #777',
  padding: '4px 8px',
});

export const indent = style({
  display: 'flex',
  flexDirection: 'column',

  position: 'relative',
  left: '1rem',
});
export const text = style({
  color: '#333',
  letterSpacing: 1,
  fontSize: 6,

  display: 'inline-flex',
});
