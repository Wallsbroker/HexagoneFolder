import Axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/vendre.module.css';

import type { NextPage } from 'next'

const defaultEndPoint = "http://localhost:4000/auth/login";
const postVendre = (props: { data: any }) => {
    const vendre = props.data;
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Hexagone</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      

      <main className={styles.main}>
      
      <h1 className={styles.boutton_header_all}>
            <a><Image src="/logo.png" width={60} height={60} alt="" ></Image></a>
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

        <p className={styles.titrePage}>Connexion</p>
        
        <form action="/auth/register" method="post">
        <label  className={styles.lilInside1}htmlFor="email">email</label><br></br>
        <input className={styles.field1} type="text" id="email" name="email"></input><br></br>
        <label className={styles.lilInside1} htmlFor="password">Mot de passe</label><br></br>
        <input className={styles.field1} type="text" id="password" name="password"></input>

        <div className={styles.divBtn}><button   onClick={click} className={styles.btn} type="submit">Envoyer</button></div>

</form>
</main>
      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default postVendre;
async function  click() {
  const res = await Axios.post(`${defaultEndPoint}`);
  const data = res.data;
  return {
    props: { data },
  };
};

