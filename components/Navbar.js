import styles from '../styles/layout.module.css';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';


export function Navbar() {

  function toggleNav() {
    const navList = document.getElementById("navList");
    if (navList.className === styles.nav) {
      navList.className = styles.nav + " " + styles.responsive;
    } else {
      navList.className = styles.nav;
    }
  }

  return (
    <div className = {styles.header}>
      <div className = {styles.logo}>
      א ד מ ה
      </div>
      <div className = {styles.navmenu} id = "clickMenu" onClick = {toggleNav}>
          <FontAwesomeIcon icon={faBars} style={{ width: '1rem'}}/>
      </div>
      <nav className={styles.nav} id = "navList">
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
          <a href = "https://www.instagram.com/adamahceramics/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} style={{ width: '1rem'}}/>
          </a>
      </nav>
      
    </div>
  )
}