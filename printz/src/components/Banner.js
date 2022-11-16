import React from 'react'
import styles from './styles/Banner.module.css';
import banner from '../img/banner/banner.jpg'

const Banner = () => {
  return (
    <section >
        <div  className={styles.banner}>
            <img src={banner}></img>
        </div>
        
    </section >
  )
}

export default Banner