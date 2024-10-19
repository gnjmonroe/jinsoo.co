import React, { FC } from 'react';
import { contacts, projects, bio } from './data';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import * as styles from './page.css';
import Header from './components/Header';

const Index: FC = () => (
  <main className={styles.main}>
    <Header />
    <div className={styles.content}>
      <section className={styles.projects}>
        {projects.map((project) => (
          <Project
            name={project.name}
            url={project.url}
            year={project.year}
            description={project.description}
            key={project.name}
          />
        ))}
      </section>
      <section className={styles.about}>
        {bio.map((paragraph) => (
          <p className={styles.aboutP} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
      <section className={styles.contacts}>
        {contacts.map((contact) => (
          <Contact
            title={contact.title}
            url={contact.url}
            key={contact.title}
          />
        ))}
      </section>
    </div>
  </main>
);

export default Index;
