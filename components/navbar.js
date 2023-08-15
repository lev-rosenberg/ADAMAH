import styles from './layout.module.css';


export function Navbar() {

  return (
    <div className = {styles.header}>
    <div className = {styles.logo}>
    א ד מ ה
    </div>
      <nav className={styles.nav}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Commission</h3>
        <h3>Gallery</h3>
      </nav>
    </div>
  )
}