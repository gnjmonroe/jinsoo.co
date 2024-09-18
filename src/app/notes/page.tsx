import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import { getDirectories } from '../sketches/utils';
import * as styles from './page.css';

const dirsToSkip = ['components', 'template'];
const notesPath = `./src/app/notes`;
const dirs = await getDirectories(notesPath);
const dateFilenames = dirs.filter((dirname) => !dirsToSkip.includes(dirname));

const NotesIndex = () => (
  <main className={styles.root}>
    <Header />
    <h2>Notes</h2>
    <ol className={styles.ol}>
      {dateFilenames
        .sort((a, b) => b.localeCompare(a))
        .map((dfn) => (
          <Link className={styles.link} href={`notes/${dfn}`}>
            {dfn}
          </Link>
        ))}
    </ol>
  </main>
);

export default NotesIndex;
