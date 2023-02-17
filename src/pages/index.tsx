/* eslint-disable import/extensions */
import Head from 'next/head'
import about from "../data/about"
import projects from "../data/projects"
import contacts from '../data/contacts'
import handleDate from '../utils/handleDate'
import styles from '../styles/Home.module.scss'

const UnderConstructionTag = () => (
  <a 
    className={styles.underConstructionTag} 
    href="https://papago.naver.com/?sk=ko&tk=en&st=%EA%B3%B5%EC%82%AC%EC%A4%91" 
    target="_blank" 
    rel="noreferrer">
    <em>[공사중]</em>
  </a>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Gregory N.J. Monroe</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>Gregory N.J. Monroe</h1>
        
        <h2 className={styles.h2}>ABOUT</h2>
        {about.map((aboutP) => (
          <p 
            key={aboutP.id}
            className={styles.aboutText}
          >
            {aboutP.text}
          </p>
        ))}

        <h2 className={styles.h2}>PROJECTS</h2>
        <UnderConstructionTag />
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
    
        <h2 className={styles.h2}>CONTACT</h2>
        {contacts.map((contact) => (
          <a 
            key={contact.text}
            className={styles.contactItem}
            href={`${contact.url}`}>{contact.text}
          </a>
        ))}
      </main>
    </>
  )
}
