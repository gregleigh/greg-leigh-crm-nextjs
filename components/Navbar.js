import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.link}>Home</Link>
      <Link href="/dashboard" className={styles.link}>Dashboard</Link>
      <Link href="/properties" className={styles.link}>Properties</Link>
    </nav>
  )
}
