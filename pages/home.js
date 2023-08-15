import Layout from '../components/layout';
import Carousel from '../components/carousel';
import styles from "../styles/home.module.css"


export default function Home() {
  return (
    <Layout>
      <div className = {styles.home}>
        <div className = {styles.titleContainer}>
          <h1>A D A M A H Ceramics</h1>
          <p>Functional Art</p>
        </div>
        <Carousel />
      </div>
    </Layout>
  );
}