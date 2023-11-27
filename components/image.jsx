import React, {useEffect, useState} from "react";
import styles from "../styles/image.module.css";

export default function ImageWrapper({src, classStr}) {
  
  return (
    <div className={styles[classStr]}>
      <img src={src} />
    </div>
  );
}
