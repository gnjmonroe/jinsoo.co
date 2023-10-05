import React, { FC } from 'react';
import Head from 'next/head';

import * as styles from '../styles/index.css';

interface ContactProps {
  title: string;
  url: string;
}

const Contact: FC<ContactProps> = ({ title, url }) => (
  <a className={styles.contact} href={url}>
    {title}
  </a>
);

export const Home = () => (
  <>
    <Head>
      <title>Gregory Nathan Jinsoo Monroe</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>

    <main className={styles.main}>
      <header>
        <h1 className={styles.mainName}>Gregory Nathan Jinsoo Monroe</h1>
        <span className={styles.subName}>고진수</span>
      </header>
      <div className={styles.content}>
        <section className={styles.about}>
          <p className={styles.aboutP}>
            I am a frontend engineer based in Seoul.
          </p>
          <p className={styles.aboutP}>
            In my personal practice, I primarily design and develop websites for
            architects, applying aesthetic motifs from architecture and urban
            environments to UI/UX design for the web, particularly focusing on
            navigation and information architecture.
          </p>
          <p className={styles.aboutP}>
            Previously, I worked as an in-house graphic designer and web
            developer at a local architecture firm. Before that, I was a product
            engineer in the automotive industry, shepherding the 2018 Ford Edge
            center console, in its 118+ permutations, to production.
          </p>
          <p className={styles.aboutP}>
            I have studied Urban Design, Urban Planning, and Materials Science
            and Engineering at the University of Michigan.
          </p>
        </section>
        <section className={styles.contacts}>
          <Contact title='GitHub' url='https://github.com/gnjmonroe' />
          <Contact
            title='LinkedIn'
            url='https://www.linkedin.com/in/gnjmonroe/'
          />
          <Contact title='Email' url='gnjmonroe@gmail.com' />
        </section>
      </div>
    </main>
  </>
);

export default Home;
