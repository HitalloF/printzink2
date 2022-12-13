import React from 'react'
import styles from './styles/Destaques.module.css';
import destaque from '../img/destaques/1.png'
const Destaques = () => {
  return (
    <section className={styles.title}>
                  <h1><strong>LET'S WORK TOGETHER</strong></h1>
        <div className={styles.destaque}>

            <div className={styles.destaquebox}>
                <img src={destaque}></img>
                <h2><strong>GROW AND BUILD YOUR BRAND</strong></h2>  
                <div className={styles.destaquetxt}>
                <ul>
                    <li>Multiple Styles and Colors Available</li>
                    <li>Customize with any patch style (Rogue, Leather, Sublimated)</li>
                    <li>High Quality Private Labeled Headwear and Apparel</li>
                    <li>Get Finished Goods In As Quick As 2 Weeks</li>

                </ul>

                </div>
                <button>GET STARTED</button>
            </div>
        </div>

    </section>
  )
}

export default Destaques