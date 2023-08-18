import { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import styles from "../styles/gallery.module.css"


export default function Gallery() {

  const [selectedCollection, setSelectedCollection] = useState("All")
  
  const collectionPaths = {}
  const images = require.context('../public/images/gallery', true, /\.(jpg|jpeg|png|gif)$/);
  images.keys().forEach((path) => {
    const [directory] = path.split('/').slice(1, -1);
    if (!collectionPaths[directory]) {
      collectionPaths[directory] = [];
    }
    const imgPath = path.substring(1)
    collectionPaths[directory].push(imgPath)
  });
  let categories = Object.keys(collectionPaths)
  categories.unshift("All")

  return (
    <Layout>
      <div>
        <div className = "titleContainer">
          <h1>Collections</h1>
          <div className = {styles.categoryButtonsContainer}>
            {categories.map((collection, i) => (
              <button 
                key = {i} 
                className = {styles.categoryButton}
                onClick = {() => setSelectedCollection(collection)}>{collection}</button>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          {selectedCollection === "All" ? (
            <>
              {Object.keys(collectionPaths).map((collection) => (
                collectionPaths[collection].map((img, i) => (
                  <Image key={i} src={`images/gallery/${img}`} classStr="gallery" />
                ))
              ))}
            </>
          ) : (
            <>
              {collectionPaths[selectedCollection].map((img, i) => (
                <Image key={i} src={`images/gallery/${img}`} classStr="gallery" />
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}