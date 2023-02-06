import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/styles.module.css';

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
		
		

		<div className={styles.containerTop}>
			
		<p className={styles.titrePage}>Réseau Hexagone,<br></br>Bienvenue !</p>


		
		</div>

		<div className={styles.box1}>
			<h1 className={styles.titleMain1}>À Propos</h1>
		<p className={styles.mainText}>Le réseau Hexagone est a été fondé entre une poignée de brokers qui partagent les mêmes valeurs du métier de conseil en immobilier d'entreprise.</p>
		<p className={styles.mainText}>Totalement gratuit, son objectif est de créer une plateforme collaborative entre professionnels permettant de s'appuyer sur des relais locaux pour optimiser les résultats et la satisfaction des mandants.</p>

		<p className={styles.mainText}>Notre réseau privilégie la qualité à la quantité bla bla bla...</p>
		</div>
		

		<div className={styles.box2}>
			<h1 className={styles.titleMain}>À Propos</h1>
		<p className={styles.mainText}>Le réseau Hexagone est a été fondé entre une poignée de brokers qui partagent les mêmes valeurs du métier de conseil en immobilier d'entreprise.</p>
		<p className={styles.mainText}>Totalement gratuit, son objectif est de créer une plateforme collaborative entre professionnels permettant de s'appuyer sur des relais locaux pour optimiser les résultats et la satisfaction des mandants.</p>

		<p className={styles.mainText}>Notre réseau privilégie la qualité à la quantité bla bla bla...</p>
		</div>

		<div className={styles.box1}>
			<h1 className={styles.titleMain1}>À Propos</h1>
		<p className={styles.mainText}>Le réseau Hexagone est a été fondé entre une poignée de brokers qui partagent les mêmes valeurs du métier de conseil en immobilier d'entreprise.</p>
		<p className={styles.mainText}>Totalement gratuit, son objectif est de créer une plateforme collaborative entre professionnels permettant de s'appuyer sur des relais locaux pour optimiser les résultats et la satisfaction des mandants.</p>

		<p className={styles.mainText}>Notre réseau privilégie la qualité à la quantité bla bla bla...</p>
		</div>

		<div className={styles.box3}>
			<h1 className={styles.titleMain}>À Propos</h1>
		<p className={styles.mainText}>Le réseau Hexagone est a été fondé entre une poignée de brokers qui partagent les mêmes valeurs du métier de conseil en immobilier d'entreprise.</p>
		<p className={styles.mainText}>Totalement gratuit, son objectif est de créer une plateforme collaborative entre professionnels permettant de s'appuyer sur des relais locaux pour optimiser les résultats et la satisfaction des mandants.</p>

		<p className={styles.mainText}>Notre réseau privilégie la qualité à la quantité bla bla bla...</p>
		</div>

		<div className={styles.box1}>
			<h1 className={styles.titleMain1}>À Propos</h1>
		<p className={styles.mainText}>Le réseau Hexagone est a été fondé entre une poignée de brokers qui partagent les mêmes valeurs du métier de conseil en immobilier d'entreprise.</p>
		<p className={styles.mainText}>Totalement gratuit, son objectif est de créer une plateforme collaborative entre professionnels permettant de s'appuyer sur des relais locaux pour optimiser les résultats et la satisfaction des mandants.</p>

		<p className={styles.mainText}>Notre réseau privilégie la qualité à la quantité bla bla bla...</p>
		</div>
	  </main>

	  <footer className={styles.footer}>Footer
	  </footer>
	</div>
  )
}

export default Home
