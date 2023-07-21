import Head from 'next/head';
import Layout from '../components/layout';
import Image from '../components/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout>
        <Image src = '/images/flowing.png'/>
        <Image src = '/images/flowing.png'/>
        <Image src = '/images/flowing.png'/>
        <Image src = '/images/flowing.png'/>
    </Layout>
  );
}