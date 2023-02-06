import Axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
const authRouter = require('./routes/auth')

import styles from '../styles/vendre.module.css';

import type { NextPage } from 'next'

const defaultEndPoint = "http://localhost:4000/auth/register";
const Register = (props: { data: any }) => {
    const register = props.data;
  

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

        <h1 className={styles.titrePage}>Créer un compte</h1>
        
        <form action="/" method="post">
        <label className={styles.lilInside1} htmlFor="first">Prénom</label><br></br>
        <input className={styles.field1} type="text" id="first" name="firstname"></input><br></br>
        <label  className={styles.lilInside1} htmlFor="last">Nom</label><br></br>
        <input className={styles.field1} type="text" id="lastname" name="lastname"></input><br></br>
        <label  className={styles.lilInside1}htmlFor="mail">email</label><br></br>
        <input className={styles.field1} type="text" id="mail" name="email"></input><br></br>
        <label className={styles.lilInside1} htmlFor="pass">Mot de passe</label><br></br>
        <input className={styles.field1} type="text" id="pass" name="password"></input>

        <div className={styles.divBtn}><button   onClick={oui} className={styles.btn} type="submit">Envoyer</button></div>

</form>
</main>
      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default Register;

async function  oui() {
var first = JSON.stringify(document.getElementById('first').valueOf);
var last = JSON.stringify(document.getElementById('last').valueOf);
var email = JSON.stringify(event.target.email.valueOf);
var password = document.getElementById('pass').valueOf;

  const res = await Axios.post('/auth/register', {
    firstname:first.valueOf,
    lastname:last.valueOf,
    email: email.valueOf,
    password: password.valueOf
  });
  const data = res.data.json;
  return {
    props: { data }
  }
}

