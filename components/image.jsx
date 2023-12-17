import React, {useEffect, useState} from "react";
import styles from "../styles/image.module.css";
import Image from "next/image";

export default function ImageWrapper({src, classStr}) {
  console.log(src);
  return (
    <div className={styles[classStr]} style={{position: "relative"}}>
      <Image 
        src={src} 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill={true} 
        alt = "Error loading image" 
        quality={30}
        priority={true}
      />
    </div>
  );
}