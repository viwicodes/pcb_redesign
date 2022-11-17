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
        <div className={styles.social}>
          <div className={styles.sm}>
            <img src="./icons/spotify.png" alt="" /><hr />
            <img src="./icons/youtube.png" alt="" /><hr />
            <img src="./icons/twitter.png" alt="" /><hr />
            <img src="./icons/soundcloud.png" alt="" /><hr />
            <img src="./icons/facebook.png" alt="" /><hr />
            <img src="./icons/instagram.png" alt="" />
          </div>
        </div>
        <div className={styles.player}>
          <div className={styles.mainColumn}>
            <h1 className={styles.nameHeading}>pina colada blues</h1>
            <img className={styles.playerImage} src="./img/musicItems.png" alt="" />
            <img className={styles.musicPlayer} src="./img/songPlayer.png" alt="" />
          </div>
        </div>
        <div className={styles.profile}>
          <img src="./img/pcb1.jpeg" alt="" />
        </div>
      </div>
    </>
  )
}
