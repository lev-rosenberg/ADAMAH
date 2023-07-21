import styles from '../styles/Home.module.css';

const name = 'Lev Rosenberg';
export const siteTitle = 'Next.js Sample Website';

export default function Image(props) {
  return (
    <div className = {styles.imageContainer}>
      <img src = {props.src}></img>
    </div>
  );
}