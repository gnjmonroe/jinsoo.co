/* eslint-disable import/extensions */
import Head from 'next/head'
import Header from '@/components/Header'

import projects from "@/data/projects"
import handleDate from '@/utils/handleDate'

import styles from './Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gregory N.J. Monroe</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Header />

        <h2 className={styles.h2}>PROJECTS</h2>
        {projects.sort((a, b) => {
          if (a.date > b.date) return -1;
          if (a.date < b.date) return 1;

          return 0;
        }).map((project) => (
          <div 
            key={project.title}
            className={styles.projectItem}
          >
            <p className={styles.date}>
              {project.date === 'ongoing' ? '진행 중' : handleDate(project.date)}
            </p>
            <div className={styles.titleGithubBar}>
              {project.link ? (
                <a 
                  href={project.link}
                  className={styles.title}
                >{project.title}</a>
              ) : (
                <p className={styles.title}>{project.title}</p>
              )}
              {project.githubChipUrl ? (
                <a 
                  href={project.githubChipUrl}
                  className={styles.githubChip}
                >GitHub 🔗</a>
              ) : null}
            </div>
            {project.description ? 
              <p className={styles.description}>{project.description}</p> : null}
            <div className={styles.keywords}>
              {project.keywords.sort().map(keyword => (
                <p
                  key={keyword}
                  className={styles.keyword}
                >{keyword}</p>
              ))}
            </div>
          </div>
        ))}
      </main>
    </>
  )
}
