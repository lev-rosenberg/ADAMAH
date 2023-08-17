
import { useRef, useEffect, useState } from 'react'
import Image from "./image";
import styles from "../styles/home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons'


export default function Carousel() {
  const containerRef = useRef(null)
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagePaths = [];

  const images = require.context('../public/images/home', true, /\.(jpg|jpeg|png|gif)$/);
  images.keys().forEach((path) => {
    imagePaths.push(path.substring(1));
  });

  useEffect(() => {
    const container = containerRef.current;
    console.log(cardRef.current)
    const cardWidth = cardRef.current.offsetWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;
    // const targetPosition = Math.min(currentIndex * cardWidth - container.clientWidth / 2 + cardWidth / 2, maxScroll);
    const targetPosition = currentIndex * cardWidth;

    console.log(targetPosition)
    container.scrollTo({
      left: targetPosition,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const scrollRight = () => {
    if (currentIndex < imagePaths.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };


  return (
    <div className = {styles.carouselContainer}>
      <div className = {`${styles.clipCarousel} ${styles.carouselScroll}`} ref={containerRef}>
      <div className = {styles.scrollButtonsContainer}>
        <div className = {`${styles.scrollButton} ${styles.scrollButtonLeft}`}>
          <FontAwesomeIcon icon={faCaretLeft}  onClick = {scrollLeft}/>
        </div>
        <div className = {`${styles.scrollButton} ${styles.scrollButtonRight}`}>
          <FontAwesomeIcon icon={faCaretRight}  onClick = {scrollRight}/>
        </div>
      </div>
        {imagePaths.map((img,i) => (
          <div ref = {cardRef} key = {i} >
            <Image src = {`images/home${img}`} classStr = "home"></Image>
          </div>
        ))}
        <svg width = "0" height = "0">
          {/* this is taken from https://www.instagram.com/reel/Ch9UqIMDK7v/ great tutorial!! */}
          <defs>
            <clipPath id = "curvedCarousel" clipPathUnits="objectBoundingBox">
              <path 
                d="M 0 0
                Q .5 .2 1 0
                L 1 1
                Q .5 .8 0 1
                L 0 0
                Z"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}