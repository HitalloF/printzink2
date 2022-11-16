import React from 'react'
import styles from './styles/Icons.module.css'
import insta from '../img/social/insta.png'


const Icons = () => {
  return (
    <section>
        <ul className={styles.icons}>
        <li>
            <div className={styles.iconbox}>
                <img src={insta}></img>
                <p>FOLLOW US ON INSTAGRAM</p>
            </div>
        </li>
        <li>
            <div className={styles.iconbox}>
                <img src={insta}></img>
                <p>FOLLOW US ON INSTAGRAM</p>
            </div>
        </li>
        <li>
            <div className={styles.iconbox}>
                <img src={insta}></img>
                <p>FOLLOW US ON INSTAGRAM</p>
            </div>
        </li>
        </ul>
    </section>
  )
}

export default Icons