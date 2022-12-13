import React from 'react'
import styles from './styles/Icons.module.css'
import insta from '../img/social/insta.png'
import tele from '../img/social/telegram.png'
import face from '../img/social/face.png'

const Icons = () => {
  return (
    <section>
        <ul className={styles.icons}>
        <li>
            <div className={styles.iconbox}>
                <a href='https://www.instagram.com/printzink/' target="_blank"><img src={insta}></img></a>
                <p>FOLLOW US ON INSTAGRAM</p>
            </div>
        </li>
        <li>
            <div className={styles.iconbox}>
                <img src={face}></img>
                <p>FOLLOW US ON FACEBOOK</p>
            </div>
        </li>
        <li>
            <div className={styles.iconbox}>
                <img src={tele}></img>
                <p>CONTACT US ON INSTAGRAM</p>
            </div>
        </li>
        </ul>
    </section>
  )
}

export default Icons