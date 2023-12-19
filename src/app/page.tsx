import React, { FC } from 'react';

import Link from 'next/link';
import * as styles from './page.css';
import { contacts, projects, bio } from './data';

interface ProjectProps {
  name: string;
  url: string;
  year: number;
  description: string;
}

interface ContactProps {
  title: string;
  url: string;
}

const Project: FC<ProjectProps> = ({ name, url, year, description }) => (
  <Link className={styles.project} href={url}>
    <header className={styles.projectHeader}>
      <span className={styles.projectName}>{name}</span>
      <span className={styles.projectYear}>{year}</span>
    </header>
    <p className={styles.projectDescription}>{description}</p>
  </Link>
);

const Contact: FC<ContactProps> = ({ title, url }) => (
  <a
    className={styles.contact}
    href={title === 'Email' ? `mailto:${url}` : url}
  >
    {title}
  </a>
);

const Index = () => (
  <main className={styles.main}>
    <header>
      <h1 className={styles.mainName}>Gregory Nathan Jinsoo Monroe</h1>
      <span className={styles.subName}>고진수</span>
    </header>
    <div className={styles.content}>
      <section className={styles.projects}>
        {projects.map((project) => (
          <Project
            name={project.name}
            url={project.url}
            year={project.year}
            description={project.description}
          />
        ))}
      </section>
      <section className={styles.about}>
        {bio.map((paragraph) => (
          <p className={styles.aboutP}>{paragraph}</p>
        ))}
      </section>
      <section className={styles.contacts}>
        {contacts.map((contact) => (
          <Contact title={contact.title} url={contact.url} />
        ))}
      </section>
    </div>
  </main>
);

export default Index;
