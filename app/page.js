//import styles from './page.module.css'
'use client'
import Head from 'next/head'
import styles from './style.css';
import Footer from './Footer';
import NavBar from './NavBar';
export default function Home() {

  return (
    <main className={styles.main}>
      <NavBar/>
      <Footer />
    </main>
  )
}

