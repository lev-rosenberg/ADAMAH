import Layout from '../components/layout';
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <Layout>
      <main>
        <div className={styles.aboutContent}>
          <h1>About ADAMAH</h1>
          <p>
            Welcome to ADAMAH Ceramics, where the ancient art of pottery meets modern creativity. I'm Lev Rosenberg, the driving force behind this ceramic journey, and I'm thrilled to share my passion for ceramics with you. 
          </p>
          <p>
            My connection to ceramics runs deep, inspired by my father who is a passionate hobbyist potter. The memories of watching him transform raw clay into exquisite pieces of art have been a guiding light in my creative exploration. 
            For over a decade, ceramics has been more than just a hobby to me. It has been a life teacher. The phrase "it's just mud" is more than a reminder; it's a philosophy. Pottery teaches us to accept failure as a stepping stone and to keep moving forward. These lessons of resilience, patience, and adaptability have enriched both my personal life and my academic journey.
          </p>
             <p>
            At ADAMAH Ceramics, I strive to create functional art that marries form and function. Each piece is a unique blend of sculptural creativity and practicality. Whether it's a chalice with a hand-formed stem or a teapot shaped from an unconventional donut-inspired form, my goal is to make art an integral part of your daily life.
          </p>
        </div>
      </main>
    </Layout>
  );
}

