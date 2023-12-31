export const rootGap = 20;
export const rootPadding = 20;
export const rootGridLength = {
  portrait: `min(calc(calc(100vh - ${3 * rootGap}px - ${
    2 * rootPadding
  }px) / 4), calc(calc(100vw - ${2 * rootGap}px - ${2 * rootPadding}px) / 3))`,
  landscape: `min(calc(calc(100vh - ${2 * rootGap}px - ${
    2 * rootPadding
  }px) / 3), calc(calc(100vw - ${3 * rootGap}px - ${2 * rootPadding}px) / 4))`,
};

export const colors = {
  background: '#C3D0FA',
  blowout: '#FEFFFD',
  diffraction: '#F1E7E5',
} as const;
