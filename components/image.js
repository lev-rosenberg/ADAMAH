
const name = 'Lev Rosenberg';
export const siteTitle = 'Next.js Sample Website';
import styles from "../styles/home.module.css"

export default function Image(props) {
  return (
    <div className = {styles.homeImg}>
      <img src = {props.src}></img>
    </div>
  );
}