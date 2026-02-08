import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContent}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Louisiana</span>
          <span className={styles.logoSuffix}>Proud</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/listings" className={styles.link}>Browse Directory</Link>
          <Link href="/about" className={styles.link}>How it Works</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <button className={styles.ctaButton}>Add Listing</button>
        </div>
      </div>
    </nav>
  );
}
