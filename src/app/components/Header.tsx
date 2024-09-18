import React from 'react';
import Link from 'next/link';
import * as styles from '../page.css';

interface Props {
  location?: 'notes';
}
const Header = ({ location }: Props) => (
  <Link href='/' style={{ textDecoration: 'none' }}>
    <header>
      <h1 className={styles.mainName}>Gregory Nathan Jinsoo Monroe</h1>
      <span className={styles.subName}>고진수</span>
    </header>
  </Link>
);

const LinkToNotesPage = () => <Link href='/notes'>notes</Link>;

export default Header;
