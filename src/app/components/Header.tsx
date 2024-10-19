import React from 'react';
import Link from 'next/link';
import * as styles from '../page.css';

const LinkToNotesPage = () => (
  <Link className={styles.notesLink} href='/notes'>
    Notes
  </Link>
);

interface Props {
  location?: 'notes';
}
const Header = ({ location }: Props) => (
  <>
    <Link href='/' className={styles.headerRoot}>
      <header>
        <h1 className={styles.mainName}>Gregory Nathan Jinsoo Monroe</h1>
        <span className={styles.subName}>고진수</span>
      </header>
    </Link>
    {location === 'notes' && <LinkToNotesPage />}
  </>
);

export default Header;
