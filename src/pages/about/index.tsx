import React from 'react';

import Head from 'next/head';
import Header from '@/components/Header';
import about from '@/data/about';
import contacts from '@/data/contacts';

import * as styles from '../index.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Gregory N.J. Monroe</title>

        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <main>
        <Header />

        <h2>ABOUT</h2>
        {about.map((aboutP) => (
          <p key={aboutP.id} className={styles.aboutText}>
            {aboutP.text}
          </p>
        ))}

        <h2>CONTACT</h2>
        {contacts.map((contact) => (
          <a
            key={contact.text}
            className={styles.contactItem}
            href={`${contact.url}`}
          >
            {contact.text}
          </a>
        ))}
      </main>
    </>
  );
}
