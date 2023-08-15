import styles from './layout.module.css';


export function Navbar() {

  return (
    <div className = {styles.header}>
    <h1>
      A D A M A H Ceramics
    </h1>
      <nav className={styles.nav}>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Commission</h3>
        <h3>Gallery</h3>
      </nav>
    </div>
  )
}