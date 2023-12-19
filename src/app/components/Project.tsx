import React, { FC } from 'react';
import Link from 'next/link';
import * as styles from './Project.css';

interface ProjectProps {
  name: string;
  url: string;
  year: number;
  description: string;
}

export const Project: FC<ProjectProps> = ({ name, url, year, description }) => (
  <Link className={styles.root} href={url}>
    <header className={styles.header}>
      <span className={styles.name}>{name}</span>
      <span className={styles.year}>{year}</span>
    </header>
    <p className={styles.description}>{description}</p>
  </Link>
);

export default Project;
