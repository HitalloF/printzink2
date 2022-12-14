import React from 'react'
import vitrine1 from '../img/vitrine/1/heat.png'
import vitrine2 from '../img/vitrine/1/silk.png'
import vitrine3 from '../img/vitrine/1/bordado.png'
import styles from './styles/Vitrine.module.css';


const Vitrine = () => {
  return (
    <div className={styles.title}>    <h1>SERVICES</h1>
        <div className={styles.vitrine}>

            <ul>
                <li>
                    <div className={styles.vitrinebox}>
                    <a href='https://printzink.com/service'><img src={vitrine1}></img> </a>
                    <h2>HEAT PRESS</h2>

                    </div>
                    </li>
                    <li>
                    <div className={styles.vitrinebox}>
                    <a href='https://printzink.com/service'><img src={vitrine2}></img> </a>
                    <h2>SILK-SCREEN</h2>

                    </div>
                    </li>
                    <li>
                    <div className={styles.vitrinebox}>
                    <a href='https://printzink.com/service'  ><img src={vitrine3}></img> </a>
                    <h2>EMBROIDERY</h2>

                    </div>
                    </li>

            </ul>
        </div>
    </div>
  )
}

export default Vitrine