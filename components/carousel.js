
import React, { useRef, useEffect, useState } from 'react'
import Image from "./image";
import styles from "../styles/home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'


export default function Carousel() {
  const containerRef = useRef(null)
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  let imagePaths = [];

  const images = require.context('../public/images/home', true, /\.(jpg|jpeg|png|gif)$/);
  images.keys().forEach((path) => {
    imagePaths.push(path.substring(1));
  });
  useEffect(() => {
    const container = containerRef.current;
    const cardWidth = cardRef.current.offsetWidth;

  }, [])


  const scrollLeft = () => {
    // if (currentIndex > 0) {
    //   setCurrentIndex(currentIndex - 1);
    // }
    const container = containerRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const targetPosition = -1 * cardWidth;
    container.scrollBy({
      left: targetPosition,
      behavior: 'smooth',
    });
    const last = imagePaths.pop()
    imagePaths.unshift(last)
    console.log(imagePaths)
  };
  
  const scrollRight = () => {
    // if (currentIndex < imagePaths.length - 1) {
    //   setCurrentIndex(currentIndex + 1);
    // }
    const container = containerRef.current;
    const cardWidth = cardRef.current.offsetWidth;
    const targetPosition = cardWidth;
    container.scrollBy({
      left: targetPosition,
      behavior: 'smooth',
    });

  };


  return (
    <div className = {styles.carouselContainer}>
      <div className = {`${styles.clipCarousel} ${styles.carouselScroll}`} ref={containerRef}>
      <div className = {styles.scrollButtonsContainer}>
        <button className = {`${styles.scrollButton} ${styles.scrollButtonLeft}`} onClick = {scrollLeft}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </button>
        <button className = {`${styles.scrollButton} ${styles.scrollButtonRight}`} onClick = {scrollRight}>
          <FontAwesomeIcon icon={faAngleRight}  />
        </button>
      </div>
        {imagePaths.map((img,i) => (
          <div ref = {cardRef} key = {i} >
            <Image src = {`images/home${img}`} classStr = "home"></Image>
          </div>
        ))}
        <svg width = "100%" height = "100%">
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