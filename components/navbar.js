import styles from '../styles/layout.module.css';
import Link from 'next/link'

export function Navbar() {

  return (
    <div className = {styles.header}>
      <div className = {styles.logo}>
      א ד מ ה
      </div>
      <nav className={styles.nav}>
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <Link href = "/gallery">
          <h3>Gallery</h3>
        </Link>
        {/* <Link href = "/commission">
          <h3>Commission</h3>
        </Link> */}
        <Link href = "/about">
          <h3>About</h3>
        </Link>
      </nav>
    </div>
  )
}