import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles.filler}></div>
        <nav className={styles.navbar}>
          {/* <li>Home</li>
          <li>Vedio</li>
          <li>Music</li>
          <li>Bookin & Contact</li> */}
        </nav>
      </div>
      <div className={styles.mainHero}>
        <div className={styles.social}></div>
        <div className={styles.player}>
        </div>
        <div className={styles.profile}>
          <img src="./img/pcb1.jpeg" alt="" />
        </div>
      </div>
    </>
  )
}
