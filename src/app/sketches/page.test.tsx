import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { getDirectories } from './utils';
import Sketches from './page';

test('Number of li elements equals number of sketch directories', async () => {
  const sketchesPath = './src/app/sketches/';
  const sketchesDirs = await getDirectories(sketchesPath);
  const dateDirs = sketchesDirs.filter((name) => name !== 'utils');

  render(<Sketches />);

  const listItems = await screen.findAllByRole('listitem');
  expect(listItems.length).toBe(dateDirs.length);
});
