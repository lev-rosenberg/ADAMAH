import Layout from '../components/layout';
import Image from '../components/image';
import styles from "../styles/gallery.module.css"


export default function Gallery() {

  const imagePaths = [];

  // Function to recursively retrieve image paths
  const retrieveImagePaths = (dir) => {
    const images = require.context('../public/images', true, /\.(jpg|jpeg|png|gif)$/);
    images.keys().forEach((path) => {
      imagePaths.push(path.substring(1));
    });
  };

  retrieveImagePaths('../public/images');
  // console.log(imagePaths[0])
  return (
    <Layout>
      <div className = {styles.grid}>
        {imagePaths.map((img,i) => (
          <Image key = {i} src = {`images/${img}`}></Image>
        ))}
      
      </div>
    </Layout>
  );
}