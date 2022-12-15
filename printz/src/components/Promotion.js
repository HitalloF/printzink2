import React from 'react'
import styles from './styles/Promotion.module.css'

const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.promotioncase}>
    <div className={styles.promotionbox}>
      <div className={styles.videoDesktop}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5I1Cj9cNg7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
      <div className={styles.videoMobile}><iframe width="360" height="215" src="https://www.youtube.com/embed/5I1Cj9cNg7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
    </div>
      </div>
      <div className={styles.promotioncase}>
    <div className={styles.promotionbox}>
    <div className={styles.videoDesktop}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/hVWPElC75Y8" title="PrintZ INK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
    </div>
    <div className={styles.videoMobile}><iframe width="360" height="215" src="https://www.youtube.com/embed/hVWPElC75Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
    </section>
  )
}

export default Promotion