import { useState } from 'react';
import Layout from '../components/Layout';
import ImageWrapper from '../components/Image';
import styles from "../styles/gallery.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


export default function Gallery() {

  const [selectedCollection, setSelectedCollection] = useState("Cups & Mugs")
  const [toggled, setToggled] = useState(false)
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

  function toggleCategories() {
    const categoryList = document.getElementById("categoryList");
    if (categoryList.className === styles.categoryButtonsOuter) {
      categoryList.className = styles.categoryButtonsOuter + " " + styles.responsive;
    } else {
      categoryList.className = styles.categoryButtonsOuter;
    }
    setToggled(!toggled)
  }

  function untoggleCategories(collection) {
    setSelectedCollection(collection);
    const categoryList = document.getElementById("categoryList");
    categoryList.className = styles.categoryButtonsOuter;
    setToggled(!toggled)
  }

  return (
    <Layout>
      <div>
        <div className = "titleContainer">
          <h1>Collections</h1>
          <div className={styles.categorySelect}>
            <div>
              {selectedCollection}
            </div>
            <div className = {styles.categoryToggle} id = "clickMenu" onClick = {toggleCategories}>
              <FontAwesomeIcon icon={toggled ? faAngleUp : faAngleDown} style={{ width: '1rem'}}/>
            </div>
          </div>
          <div className = {styles.categoryButtonsOuter} id = "categoryList">
          <div className = {styles.categoryButtonsContainer}>
            {categories.map((collection, i) => (
              <button 
                key = {i} 
                className = {styles.categoryButton}
                onClick = {
                  () => untoggleCategories(collection)
                }
                >
                  {collection}
              </button>
            ))}            
          </div>
          </div>
         
        </div>
        <div className={styles.grid}>
          {selectedCollection === "All" ? (
            <>
              {Object.keys(collectionPaths).map((collection) => (
                collectionPaths[collection].map((img, i) => (
                  <ImageWrapper key={i} src={`/images/gallery${img}`} classStr="gallery" />
                ))
              ))}
            </>
          ) : (
            <>
              {collectionPaths[selectedCollection].map((img, i) => (
                <ImageWrapper key={i} src={`/images/gallery${img}`} classStr="gallery" />
              ))}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}