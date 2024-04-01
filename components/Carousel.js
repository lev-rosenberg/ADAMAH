
import React, { useRef, useState } from 'react'
import ImageWrapper from "./Image";
import styles from "../styles/home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons';



export default function Carousel() {
  const containerRef = useRef(null)
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  let imagePaths = [];
  const images = require.context('../public/images/home', true, /\.(jpg|jpeg|png|gif)$/);
  images.keys().forEach((path) => {
    imagePaths.push(path.substring(1));
  });


  const scrollLeft = () => {
    const container = containerRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const excessCards = Math.floor(container.offsetWidth / cardWidth) - 1;
    const indexAdjust = excessCards < 0 ? 0 : excessCards;
    let targetPosition
    if (currentIndex >= 1 + indexAdjust) {
      setCurrentIndex(currentIndex - 1)
      targetPosition = -1 * cardWidth;
    }
    else {
      setCurrentIndex(imagePaths.length - 1)
      targetPosition = (imagePaths.length - 1) * cardWidth;
    }
    container.scrollBy({
      left: targetPosition,
      behavior: 'smooth',
    });

  };
  
  const scrollRight = () => {
    const container = containerRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const excessCards = Math.floor(container.offsetWidth / cardWidth) - 1;
    const indexAdjust = excessCards < 0 ? 0 : excessCards;
    let targetPosition;
    if (currentIndex < imagePaths.length - indexAdjust - 1) {
      setCurrentIndex(currentIndex + 1)
      targetPosition = cardWidth;
    }
    else {
      setCurrentIndex(0)
      targetPosition = -1 * (imagePaths.length - 1) * cardWidth;
    }
    container.scrollBy({
      left: targetPosition,
      behavior: 'smooth',
    });
  };


  return (
    <div className = {styles.carouselContainer} >
      <div className = {`${styles.clipCarousel} ${styles.carouselScroll}`} ref={containerRef}>
        <div className = {styles.scrollButtonsContainer} >
          <button className = {`${styles.scrollButton} ${styles.scrollButtonLeft}`} onClick = {scrollLeft}>
            <FontAwesomeIcon icon={faAngleLeft}/>
          </button>
          <button className = {`${styles.scrollButton} ${styles.scrollButtonRight}`} onClick = {scrollRight}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        {imagePaths.map((img,i) => (
          <div className = {styles.imgContainer} ref = {cardRef} key = {i} style = {{display: "flex"}} >
            <ImageWrapper src = {`/images/home${img}`} classStr = "home"></ImageWrapper>
          </div>
        ))}
        <svg className = {styles.clip} width = "100%" height = "100%">
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
            <path 
                d="M 0 0
                Q .5 .2 1 0
                L 1 1
                Q .5 .8 0 1
                L 0 0
                Z"
                stroke = "green"
                strokeWidth = "10px"
              />
          </defs>
          
        </svg>
      </div>
    </div>
  );
}