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


        <div className={styles.aboutUs}>
                
                <div className={styles.topPage}>
                    <h1 className={styles.titrePage}>Nos Résultats</h1>
                
            <div className={styles.dataContainer}>
            
                
                <div className={styles.data}>
                    <div className={styles.realData}>36</div>
                    <div>Deals</div>
                </div>

                <div className={styles.data}>
                    <div className={styles.realData}>110.000</div>
                    <div>M² Transactés</div>
                </div>

                <div className={styles.data}>
                    <div className={styles.realData}>192</div>
                    <div>Millions d'euros</div>
                </div>

                <div className={styles.data}>
                    <div className={styles.realData}>+200</div>
                    <div>Investisseurs</div>
                </div>
            </div>
            </div>
            
            <h1 className={styles.titre}>Nos Références</h1>
            <div className={styles.allRef}>
                <div className={styles.ref}>
                    <div className={styles.photoRef1}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Lyon High street</div>
                    <div className={styles.textRef1}>Immeuble mixte de 3.900m²</div>
                    <div className={styles.textRef1}>• Commerce : 1.497m² <br></br>• Bureaux : 2.406m²</div>

                    <div className={styles.textRef1}>Vendeur : Foncière privée <br></br> Acquéreur : SCPI</div>

                    <div className={styles.textRef1}>Juillet 2021</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/posts/activity-6823636378136535040-W8-x?utm_source=share&utm_medium=member_desktop">Détails</a>
</div>
</div>
                    
                

                <div className={styles.ref}>
                    <div className={styles.photoRef2}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Crépy-En-Valois (60)</div>
                    <div className={styles.textRef}>Ensemble commercial 3.358m² en VEFA</div>
                    <div className={styles.textRef}>Vendeur : Promoteur <br></br> Acquéreur : Foncière Privée</div>

                    <div className={styles.textRef}>Mai 2022</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/feed/update/urn:li:activity:6940532098948587520">Détails</a>
</div>
</div>

<div className={styles.ref}>
                    <div className={styles.photoRef3}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Marseille</div>
                    <div className={styles.textRef}>Pied d'immeuble alimentaire de 1.621m²</div>
                    <div className={styles.textRef}>Vendeur : Promoteur <br></br> Acquéreur : SCPI</div>

                    <div className={styles.textRef}>Avril 2022</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/feed/update/urn:li:activity:6927517639367921665">Détails</a>
</div>
</div>

<div className={styles.ref}>
                    <div className={styles.photoRef4}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Montbonnot St-Martin (38)</div>
                    <div className={styles.textRef}>Immeuble de bureaux de 1.064m²</div>
                    <div className={styles.textRef}>Vendeur : Institutionnel <br></br> Acquéreur : SCPI</div>

                    <div className={styles.textRef}>Juillet 2021</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/posts/activity-6840888657294032896-I_Rn/?utm_source=share&utm_medium=member_desktop">Détails</a>
</div>
</div>
</div>

<div className={styles.allRef}>

<div className={styles.ref}>
                    <div className={styles.photoRef5}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Meyzieu (69)</div>
                    <div className={styles.textRef}>Immeuble de bureaux + entrepôt : 2.370m²</div>
                    <div className={styles.textRef}>Vendeur : Foncière Privée <br></br> Acquéreur : SCPI</div>

                    <div className={styles.textRef}>Février 2022</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/feed/update/urn:li:activity:6896101076911611904">Détails</a>
</div>
</div>

<div className={styles.ref}>
                    <div className={styles.photoRef6}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Orléans</div>
                    <div className={styles.textRef}>Ensemble commercial 1.172m²</div>
                    <div className={styles.textRef}>Vendeur : SCPI <br></br> Acquéreur : Foncière privée</div>

                    <div className={styles.textRef}>Septembre 2022</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/posts/activity-6982590907137024002-11y3?utm_source=share&utm_medium=member_desktop">Détails</a>
</div>
</div>

<div className={styles.ref}>
                    <div className={styles.photoRef7}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Esbly (77)</div>
                    <div className={styles.textRef}>Ensemble commercial value added de 2.111m²</div>
                    <div className={styles.textRef}>Vendeur : Foncière privée <br></br> Acquéreur : Promoteur</div>

                    <div className={styles.textRef}>Décembre 2021</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/feed/update/urn:li:activity:6881893993882513408">Détails</a>
</div>
</div>

<div className={styles.ref}>
                    <div className={styles.photoRef8}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Marseille</div>
                    <div className={styles.textRef}>Murs alimentaires 258m²</div>
                    <div className={styles.textRef}>Vendeur : Foncière privée <br></br> Acquéreur : Privé</div>

                    <div className={styles.textRef}>Aout 2022</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/feed/update/urn:li:activity:6974283138113904640/">Détails</a>
</div>
</div>
</div>


<div className={styles.allRef1}>

<div className={styles.ref}>
                    <div className={styles.photoRef9}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>Salon de Provence (13)</div>
                    <div className={styles.textRef}>Murs de restaurant 479m² Terrasse : 57m²</div>
                    <div className={styles.textRef}>Vendeur : Foncière privée <br></br> Acquéreur : SCPI</div>

                    <div className={styles.textRef}>Juin 2022</div>
                    <a className={styles.textRef2} href="https://www.linkedin.com/posts/activity-6952872630827823104-gOwE?utm_source=share&utm_medium=member_desktop">Détails</a>
</div>
</div>

<div className={styles.ref}>
                    <div className={styles.photoRef10}></div>

                    <div className={styles.content}>
                        <div className={styles.titleRef}>La Mothe Saint-Heray (79)</div>
                    <div className={styles.textRef}>Local commercial de 956m² Foncier : 5.670m²</div>
                    <div className={styles.textRef}>Vendeur : Foncière privée <br></br> Acquéreur : Foncière privé</div>

                    <div className={styles.textRef}>Juin 2021</div>
                    <a className={styles.textRef2} href="http://localhost:3000/">Détails</a>
</div>
</div>


</div>
                
            </div>
            
      </main>

      <footer className={styles.footer}>
        <div>© 2022 | Fait avec ❤ par Hexagone.com</div>
      </footer>
    </div>
  )
}

export default Home
