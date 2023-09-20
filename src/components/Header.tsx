import React from 'react';
import Link from 'next/link';

import * as styles from '../styles/Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <h1 className={styles.h1}>Gregory N.J. Monroe</h1>
        <p className={styles.koreanName}>고진수</p>
      </Link>
      <Link href='/about' className={styles.infoLink}>
        About
      </Link>
    </header>
  );
}
