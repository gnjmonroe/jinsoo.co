import React from 'react';
import { getDirectories } from './utils';

const sketchesPath = `./src/app/sketches`;
const dateFilenames = await getDirectories(sketchesPath);

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
