import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hexagone</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
      
        
        <h1 className={styles.boutton_header_all}>
            <a><Image src="/logo.png" width={100} height={100} alt="" ></Image></a>
            <a href="http://localhost:3000/" className={styles.boutton_header}>Accueil</a>
            <a href="http://localhost:3000/reseau" className={styles.boutton_header}>Le Réseau</a>
            <a href="http://localhost:3000/actualites" className={styles.boutton_header}>Actualités</a>
            <a href="http://localhost:3000/nos_adherents" className={styles.boutton_header}>Nos Adhérents</a>
            <a href="http://localhost:3000/recherhe" className={styles.boutton_header}>Recherche</a>
            <a href="http://localhost:3000/vendre" className={styles.boutton_header}>Vendre votre bien</a>
            <a href="http://localhost:3000/espace_adherent" className={styles.boutton_header}>Espace Adhérent</a>
        </h1>


        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
