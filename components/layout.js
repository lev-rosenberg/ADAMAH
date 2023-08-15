import Head from 'next/head';
import styles from './layout.module.css';
import { Navbar } from './navbar';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'

const name = 'Lev Rosenberg';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
 
  

  return (
    <div className={styles.body}>
      <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="ADAMAH Portfolio"
          content="Explore the functional art of ADAMAH"
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
        {children}
      </main>
      </div>
    </div>
  );
}