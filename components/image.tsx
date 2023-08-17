const name = "Lev Rosenberg";
export const siteTitle = "Next.js Sample Website";
import styles from "../styles/image.module.css";

interface imageProps {
  src: string;
  classStr: string;
}
export default function Image(props: imageProps) {
  return (
    <div className={styles[props.classStr]}>
      <img src={props.src}></img>
    </div>
  );
}
