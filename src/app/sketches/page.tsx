import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import * as styles from './page.css';
import { getDirectories } from './utils';

const sketchesPath = `./src/app/sketches`;
const dirs = await getDirectories(sketchesPath);
const dateFilenames = dirs
  .filter((dirname) => dirname !== 'utils')
  .sort((a, b) => b.localeCompare(a));

const Sketches = () => (
  <main className={styles.root}>
    <Header />
    <h2>Sketches</h2>
    <ol className={styles.ol}>
      {dateFilenames.map((dfn) => (
        <li key={dfn}>
          <Link className={styles.link} href={`./sketches/${dfn}`}>
            {dfn}
          </Link>
        </li>
      ))}
    </ol>
  </main>
);

export default Sketches;
