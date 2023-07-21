import Head from 'next/head';
import styles from './layout.module.css';
import { Navbar } from './navbar';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'

const name = 'Lev Rosenberg';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const mainRef = useRef()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    getHeight()
    window.addEventListener("resize", getHeight);
    return () => window.removeEventListener("resize", getHeight);
  }, [])
  
  function getHeight() {
    setHeight(mainRef.current.clientHeight)
  }

  useEffect(() => {
    console.log(height)

  }, [height])

  return (
    <div ref = {mainRef} className={styles.body}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar/>
      <main className = {styles.main} >
        <div className = {styles.grid} style = {{maxHeight: `${height}px`}}>{children}</div>
      </main>
    </div>
  );
}