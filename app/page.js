//import styles from './page.module.css'
'use client'
import styles from './style.css'

import NavBar from './NavBar';
export default function Home() {

  return (
    <main className={styles.main}>
      <NavBar/>
    </main>
  )
}

