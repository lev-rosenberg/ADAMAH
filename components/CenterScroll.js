
import Image from "./image";
import styles from "./centerScroll.module.css"
export default function CenterScroll() {
  return (
    <div className = {styles.center}>
      <Image src = "images/bowls/flowing.jpeg" />
      <Image src = "images/blue-globe.jpg" />

    </div>
  );
}