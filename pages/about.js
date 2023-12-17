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
                In the ceramic studio, you fail. A lot. Pieces break. Glazes don't turn out as expected. Sometimes you just don't like the way anything looks. 
                And you get down on yourself. Everytime that happens, I think of a phrase my dad taught me about clay––"it's just mud".
                You have to learn to accept the failures, the fuck ups––even when it's not your fault. Which by the way is fucking hard. It's nowhere near natural to me to just let go and move on.
                But these lessons of resilience, patience, and adaptability have kept be afloat in the studio and beyond, enriching my personal life, my academic journey, and more.
              </p>
                <p>
                At ADAMAH Ceramics, I strive to create functional art that marries form and function. Each piece is a unique blend of sculptural creativity and practicality. Whether it's a chalice with a hand-formed stem or a teapot shaped from an unconventional donut-inspired form, my goal is to make art an integral part of your daily life.
              </p>
              <h2> Contact Me</h2>

              <p>If you want to commission a piece, or are just a fan of my work, please get in touch! </p>
              
              
              <p>You can find me at: <a href="http://instagram.com/adamah_ceramics/" rel="noreferrer" target="_blank">@adamah_ceramics</a>. Or just text me at 781-898-5553.</p>

            </div>
          </div>
         
          
        </div>
      </main>
    </Layout>
  );
}

