import Axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/vendre.module.css';

import type { NextPage } from 'next'

const defaultEndPoint = "http://localhost:4000/vendres";
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

        <p className={styles.titrePage}>Vendre votre bien</p>
        
        <form action="/send-data-here" method="post">

        <div className={styles.colA}>
    
    <h1 className={styles.liltitle}>Informations vendeur</h1>

    <div className={styles.lilInside}><label>Prénom* :</label><input className={styles.field} type="text" id="prénom" name="first" placeholder="Prénom"/></div>

  <div className={styles.lilInside}><label>Nom de famille* :</label><input className={styles.field} type="text" id="nom" name="last" placeholder="Nom"/></div>

  <div className={styles.lilInside}><label>Télephone* :</label><input className={styles.field} type="text" id="phone" name="first" placeholder="Numéro de téléphone"/></div>
  <div className={styles.lilInside}><label>Email* :</label><input className={styles.field} type="text" id="email" name="last" placeholder="Email"/></div>

  <div className={styles.lilInside}><label>Société :</label><input  className={styles.field} type="text" id="societe" name="first" placeholder="Société"/></div>

  <div className={styles.lilInside}><label>Enseigne :</label><input className={styles.field} type="text" id="enseigne" name="last" placeholder="Enseigne"/></div>
  

</div>

<div className={styles.colB}>
    <h1 className={styles.liltitle}>Le bien que vous proposez</h1>

    <div className={styles.lilInside}><label>Type de bien* :</label><input className={styles.field} type="text" id="prénom" name="first" placeholder="Type de Bien"/></div>

  <div className={styles.lilInside}><label>Type de transaction* :</label><input className={styles.field} type="text" id="nom" name="last" placeholder="Type de Transaction"/></div>

  <div className={styles.lilInside}><label>Emplacement* :</label><input className={styles.field} type="text" id="nom" name="last" placeholder="Emplacement"/></div>

  <div className={styles.lilInside}><label>Activité* :</label><input className={styles.field} type="text" id="nom" name="last" placeholder="Activité"/></div>
  

    <h1 className={styles.liltitle}>Adresse du bien</h1>

    <div className={styles.lilInside}><label>Numéro* :</label><input className={styles.field} type="number" id="prénom" name="first" placeholder="Numéro de la voie"/></div>

  <div className={styles.lilInside}><label>Nom de la voie* :</label><input className={styles.field} type="text" id="nom" name="last" placeholder="Nom de la voie"/></div>

  <div className={styles.lilInside}><label>Ville* :</label><input className={styles.field} type="text" id="nom" name="last" placeholder="Ville"/></div>

  <div className={styles.lilInside}><label>Code Postal* :</label><input className={styles.field} type="text" id="nom" name="last" placeholder="Code Postal"/></div>
  
</div>



<div className={styles.colA}>
    <h1 className={styles.liltitle}>Conditions financières</h1>

    <div className={styles.lilInside}><label>Prix net vendeur* :</label><input className={styles.field} type="number" id="prénom" name="first" placeholder="Prix Net Vendeur"/></div>

  <div className={styles.lilInside}><label>loyer annuel* :</label><input className={styles.field} type="number" id="nom" name="last" placeholder="Loyer Annuel"/></div>
</div>


<div className={styles.colB}>
    <h1 className={styles.liltitle}>Résultat</h1>

    <div className={styles.lilInside}><label>Chiffre d'affaires :</label><input className={styles.field} type="number" id="prénom" name="first" placeholder="Chiffre d'affaires"/></div>

    <div className={styles.lilInside}><label>Bénéfices :</label><input className={styles.field} type="number" id="nom" name="last" placeholder="Bénéfices"/></div>
  
</div>

<div className={styles.colA}>
<h1 className={styles.liltitle}>Surface et Longueur</h1>

    <div className={styles.lilInside}><label>Surface Commerciale* :</label><input className={styles.field} type="number" id="prénom" name="first"  placeholder="Surface Commerciale"/></div>

  <div className={styles.lilInside}><label>Surface totale* :</label><input className={styles.field} type="number" id="nom" name="last" placeholder="Surface Totale"/></div>

  <div className={styles.lilInside}><label>Vitrine* :</label><input  className={styles.field} type="number" id="nom" name="last" placeholder="Vitrine"/></div>
  
</div>



<div className={styles.colB}>
    <h1 className={styles.liltitle}>Bail Actuel</h1>

  <div className={styles.lilInside}><label>Type de bail :</label>
  <input className={styles.field} type="text" id="prénom" name="first" placeholder="Type de Bail"/></div>

  <div className={styles.lilInside}><label>date de début :</label><input className={styles.field} type="date" id="nom" name="last"/></div>

  <div className={styles.lilInside}><label>date de fin :</label><input className={styles.field} type="date" id="nom" name="last" /></div>
  
</div>


</form>
<div className={styles.h2}>* Champs obligatoires</div>
</main>
<div className={styles.divBtn}><button   onClick={click} className={styles.btn} type="submit">Envoyer</button></div>
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

