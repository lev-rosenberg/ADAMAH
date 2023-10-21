import styles from '../styles/layout.module.css';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


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
          <a href = "https://www.instagram.com/adamahceramics/">
            <FontAwesomeIcon icon={faInstagram} style={{ width: '1rem'}}/>
          </a>
        
      </nav>
    </div>
  )
}