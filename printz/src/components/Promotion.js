import React from 'react'
import styles from './styles/Promotion.module.css'
import promotion1 from '../img/promotion/1.png'
const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.promotioncase}>
    <div className={styles.promotionbox}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5I1Cj9cNg7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3></h3>
    </div>
      </div>
      <div className={styles.promotioncase}>
    <div className={styles.promotionbox}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hVWPElC75Y8" title="PrintZ INK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3></h3>
    </div>
      </div>
    </section>
  )
}

export default Promotion