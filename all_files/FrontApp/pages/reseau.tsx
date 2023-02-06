import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/actu.module.css';

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
            <a className={styles.logo}><Image src="/logo.png" width={60} height={60} alt="" ></Image></a>
            <a href="http://localhost:3000/" className={styles.boutton_header}>Accueil</a>
            <a href="http://localhost:3000/reseau" className={styles.boutton_header}>Le Réseau</a>
            <a href="http://localhost:3000/actualites" className={styles.boutton_header}>Actualités</a>
            <a href="http://localhost:3000/nos_adherents" className={styles.boutton_header}>Nos Adhérents</a>
            <a href="http://localhost:3000/recherche" className={styles.boutton_header}>Recherche</a>
            <a href="http://localhost:3000/vendre" className={styles.boutton_header}>Vendre votre bien</a>
            <a href="http://localhost:3000/espace_adherent" className={styles.boutton_header}>Espace Adhérent</a>
            {/* <a className={styles.boutton_header} href="http://localhost:3000/login">Connexion</a>
            <a className={styles.boutton_header} href="http://localhost:3000/register">Créer un compte</a> */}
        </h1>


        
                
            
      </main>

      <footer className={styles.footer}>
        <div>© 2022 | Fait avec ❤ par Hexagone.com</div>
      </footer>
    </div>
  )
}

export default Home
