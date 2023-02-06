import Link from "next/link";
export default function Navbar() {
	return (
		<>
			<h1>
				<a><Link href="index.tsx">Accueil</Link></a>
				<a><Link href="index.tsx">Le Réseau</Link></a>
				<a><Link href="index.tsx">Actualités</Link></a>
				<a><Link href="index.tsx">Nos Adhérents</Link></a>
				<a><Link href="index.tsx">Recherche</Link></a>
				<a><Link href="index.tsx">Vendre votre bien</Link></a>
				<a><Link href="index.tsx">Espace Adhérent</Link></a>
				
			</h1>
		</>
	);
}
