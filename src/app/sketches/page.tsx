import React from 'react';
import { getDirectories } from './utils';

const sketchesPath = `./src/app/sketches`;
const dirs = await getDirectories(sketchesPath);
const dateFilenames = dirs.filter((dirname) => dirname !== 'utils');

const Sketches = () => (
  <main>
    <h2>sketches</h2>
    <ol>
      {dateFilenames.toReversed().map((dfn) => (
        <li key={dfn}>
          <a href={`./sketches/${dfn}`}>{dfn}</a>
        </li>
      ))}
    </ol>
  </main>
);

export default Sketches;
