import { style } from '@vanilla-extract/css';
import { rootGap, rootPadding, rootGridLength } from './const';

export const root = style({
  margin: 'auto',
  display: 'grid',
  gap: rootGap,

  width: 'fit-content',
  height: 'fit-content',
  padding: rootPadding,

  '@media': {
    'screen and (orientation: portrait)': {
      gridTemplateRows: `repeat(4, ${rootGridLength.portrait})`,
      gridTemplateColumns: `repeat(3, ${rootGridLength.portrait})`,
    },
    'screen and (orientation: landscape)': {
      gridTemplateRows: `repeat(3, ${rootGridLength.landscape})`,
      gridTemplateColumns: `repeat(4, ${rootGridLength.landscape})`,
    },
  },
});
