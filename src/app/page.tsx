import React, { FC } from 'react';

import Link from 'next/link';
import * as styles from './page.css';

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
        <Project
          name='unseen.garden'
          url='https://www.unseen.garden/'
          year={2023}
          description='AI development for a video captioning model in PyTorch 2. Used 83,000 annotated images from the MS COCO dataset and AWS (p3.2xlarge) to train the model.'
        />
        <Project
          name='Platform C'
          url='https://platformc.kr/'
          year={2023}
          description='Redesign and development for a social activist organization’s web platform.'
        />
        <Project
          name='Domansa'
          url='https://domansaseoul.org/'
          year={2022}
          description='Redesign and development for an urban research and exhibition space platform. Inspired by the advertising stickers in the streets of Korea.'
        />
        <Project
          name='PRAUD'
          url='https://praud.info/'
          year={2022}
          description="Redesign and development for a local architecture office. The visual language of subway maps illustrate the relationship between the office's projects and lines of research and inquiry."
        />
        <Project
          name='someparts.parts'
          url='https://someparts-parts.vercel.app/'
          year={2019}
          description='Design and development showcasing a modular kit of parts applicable to myriad purposes. The visual language of spreadsheets highlights the modularity and flexibility of the kit.'
        />
        <Project
          name='Context / Content'
          url='https://contextcontent.vercel.app/'
          year={2019}
          description="Design and development for a multimedia exhibition at Taubman College. A reinterpretation of 'sitemap' is used to stage a new working definition of 'Urban Design'."
        />
      </section>
      <section className={styles.about}>
        <p className={styles.aboutP}>Gregory Monroe is a frontend engineer and UI/UX designer based in Seoul, primarily working in the fields of architecture and graphic design. He has worked for design offices in Los Angeles, Boston, and Seoul and graduated from the University of Michigan with degrees in Urban Design, Urban Planning, and Materials Science and Engineering.</p>
        <p className={styles.aboutP}>In his design work, he focuses on navigation and information architecture, often applying aesthetic and conceptual motifs from architecture and urban environments. In his development work, he focuses on responsive design, immutability, automated testing systems, and infrastructure.</p>
        <p className={styles.aboutP}>Past clients and partners include: EPFL Architecture, Gowaseo, Hyperspandrel, Chris Hamamoto, Federico Perez Villoro, PRAUD, Domansa, and stock a studio.</p>
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
);

export default Index;
