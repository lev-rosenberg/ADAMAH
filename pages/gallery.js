import Layout from '../components/layout';
import Image from '../components/image';
import styles from "../styles/gallery.module.css"


export default function Gallery() {
  return (
    <Layout>
      <main>
        <Image src = "/images/bowls/flowing.jpeg"></Image>
      </main>
    </Layout>
  );
}