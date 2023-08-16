import Layout from '../components/layout';
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <Layout>
      <main>
      <div className={styles.aboutContent}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id arcu non nisl
          egestas pellentesque. In nec ipsum vel elit mattis interdum. Nullam
          vehicula vestibulum neque, id varius mi ullamcorper eu. Quisque non metus
          sed ex volutpat facilisis a eu nisi. Vestibulum ac bibendum tortor.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia Curae; Maecenas vestibulum tincidunt semper. Etiam volutpat tellus id
          eros pellentesque, a malesuada est pellentesque. Cras sed tortor tristique,
          aliquam erat at, sollicitudin arcu.
        </p>
      </div>
      </main>
    </Layout>
  );
}