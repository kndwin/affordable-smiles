import styles from './styles.module.scss'
import Link from 'next/link'
import { Button } from 'components'

export const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.radial1} /> 
			<div className={styles.radial2} /> 
			<header className={styles.header}>
				<div className={styles.logo}>
					Affordable smiles
				</div>
				<div className={styles.links}>
					<Link href="/">
						<a className={styles.link}>Home</a>
					</Link>
					<Link href="/about-us">
						<a className={styles.link}>About us</a>
					</Link>
					<Link href="/pricing">
						<a className={styles.link}>Pricing</a>
					</Link>
					<Link href="/contact">
						<a className={styles.link}>Contact & Location</a>
					</Link>
					<Button>
						BOOK AN APPOINTMENT
					</Button>
				</div>
			</header>
			<main className={styles.main}>
				{children}
			</main>
			<footer className={styles.footer}>
				footer
			</footer>
		</div>
	)
}
