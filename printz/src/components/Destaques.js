import React from 'react'
import styles from './styles/Destaques.module.css';

const Destaques = () => {
  return (
    <section className={styles.title}>
                  <h1><strong>LET'S WORK TOGETHER</strong></h1>
        <div className={styles.destaque}>

            <div className={styles.destaquebox}>
            <div className={styles.videoDesktop}><iframe width="1160" height="655" src="https://www.youtube.com/embed/3wUlE33i0mY" title="PRINTZ INK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className={styles.videoMobile}> <iframe width="360" height="315" src="https://www.youtube.com/embed/3wUlE33i0mY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <h2><strong>GROW AND BUILD YOUR BRAND</strong></h2>  
                <div className={styles.destaquetxt}>
                <ul>
                    <li>Multiple Styles and Colors Available</li>
                    <li>Customize with any patch style (Rogue, Leather, Sublimated)</li>
                    <li>High Quality Private Labeled Headwear and Apparel</li>
                    <li>Get Finished Goods In As Quick As 2 Weeks</li>

                </ul>

                </div>
                <div className={styles.getstart}><a href="contact">GET STARTED</a></div>
            </div>

        </div>

    </section>
  )
}

export default Destaques