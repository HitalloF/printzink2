import React from 'react'
import styles from './styles/Promotion.module.css'
import promotion1 from '../img/promotion/1.png'
const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.promotioncase}>
    <div className={styles.promotionbox}>
      <img src={promotion1}></img>
      <p className={styles.promtionp}>Find the perfect Gift</p>
      <h3>HOLIDAY GIFT GUIE</h3>
    </div>
      </div>
      <div className={styles.promotioncase}>
    <div className={styles.promotionbox}>
      <img src={promotion1}></img>
      <p className={styles.promtionp}>Exclusive Seasonal Releases</p>
      <h3>HOLIDAY COLETION</h3>
    </div>
      </div>
    </section>
  )
}

export default Promotion