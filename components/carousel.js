
import Image from "./image";
import styles from "./home.module.css"
export default function Carousel() {
  return (
    <div className = {`${styles.clipCarousel} ${styles.carouselScroll}`}>
      <Image src = "images/bowls/flowing.jpeg" />
      <Image src = "images/bowls/stacked.jpeg" />
      <Image src = "images/plates/blue-cakeplate.jpeg" />
      <Image src = "images/cups-mugs/big-blue-swirly.jpeg"/>
      <Image src = "images/bowls/flowing.jpeg" />
      <Image src = "images/bowls/stacked.jpeg" />
      <Image src = "images/plates/blue-cakeplate.jpeg" />
      <Image src = "images/cups-mugs/big-blue-swirly.jpeg"/>
      <svg width = "0" height = "0">
        {/* this is taken from https://www.instagram.com/reel/Ch9UqIMDK7v/ great tutorial!! */}
        <defs>
          <clipPath id = "curvedCarousel" clipPathUnits="objectBoundingBox">
            <path 
              d="M 0 0
              Q .5 .15 1 0
              L 1 1
              Q .5 .85 0 1
              L 0 0
              Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}