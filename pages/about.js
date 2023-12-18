import Layout from '../components/layout';
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <Layout>
      <main>
        <div className={styles.aboutContent}>
          <div className = "titleContainer">
            <h1>About ADAMAH</h1>
          </div>
          <div className={styles.split}>
            <div className={styles.profilePicture}>
              <img src="/images/me.jpg" alt="Lev Rosenberg" />
            </div>
            <div className = {styles.info}>
              <p>
                Welcome to ADAMAH Ceramics! I'm Lev Rosenberg, a student artist at Northwestern University. And I'm thrilled to share my passion for ceramics with you. 
              </p>
              
              <p>
                My ceramics journey begins with my dad. From the very beginning, he fostered my love for clay. A hobbiest potter himself, I grew up surrounded by his work.
                Along with this art form, he gave me a phrase that has stuck with me to this day: "It's just mud." 
                In the ceramic studio, things don't always go as planned. Pieces break, glazes crack. 
                Sometimes you just don't like the way anything looks. You have to learn to accept the failures and keep creating, much like in life.
                
              </p>
              <p>
                At ADAMAH Ceramics, I strive to create functional art that marries form and function. Each piece is a unique blend of sculptural creativity and practicality. Whether it's a chalice with a 
                hand-formed stem or a teapot shaped from an unconventional donut-inspired form, my goal is to make art an integral part of your daily life.
              </p>
              <h2> Contact Me</h2>

              <p>If you want to commission a piece, or are just a fan of my work, please get in touch! </p>
              
              
              <p>You can find me at: <a href="http://instagram.com/adamah_ceramics/" rel="noreferrer" target="_blank" style={{border: "1px solid black", padding: "0.2rem", borderRadius: "15px", backgroundColor: "wheat"}}>@adamah_ceramics</a>. Or just text me at 781-898-5553.</p>

            </div>
          </div>
         
          
        </div>
      </main>
    </Layout>
  );
}

