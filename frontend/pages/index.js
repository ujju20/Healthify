import Head from 'next/head'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeScreen from '../src/screens/HomeScreen/index';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Healthify</title>
        <meta name="description" content="NA" />
      </Head>

      <main className={styles.main}>
        <HomeScreen />
      </main>

      <footer className={styles.footer}>
      <div>
      <img src="https://img.icons8.com/plasticine/100/000000/hospital-3.png"/>
      </div>
      </footer>
    </div>
  )
}
