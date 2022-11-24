import React from 'react'
import vitrine2 from '../img/vitrine/1/2.png'
import vitrine1 from '../img/vitrine/1/1.png'
import styles from './styles/Vitrine.module.css';
const Vitrine = () => {
  return (
    <div className={styles.title}>    <h1>RECOMMENDATIONS FOR YOU</h1>
        <div className={styles.vitrine}>

            <ul>
                <li>
                    <div className={styles.vitrinebox}>
                    <a href=""><img src={vitrine1}></img> </a>
                    <h2>SANTA ROGUE CURVED TRUCKER</h2>
                    <p>$34.95</p>
                    </div>
                    </li>
                    <li>
                    <div className={styles.vitrinebox}>
                    <a href=""><img src={vitrine2}></img> </a>
                    <h2>Silkscreen</h2>
                    <p></p>
                    </div>
                    </li>
                    <li>
                    <div className={styles.vitrinebox}>
                    <a href=""><img src={vitrine1}></img> </a>
                    <h2>SANTA ROGUE CURVED TRUCKER</h2>
                    <p>$34.95</p>
                    </div>
                    </li>
                    <li>
                    <div className={styles.vitrinebox}>
                    <a href=""><img src={vitrine1}></img> </a>
                    <h2>SANTA ROGUE CURVED TRUCKER</h2>
                    <p>$34.95</p>
                    </div>
                    </li>
                    <li>
                    <div className={styles.vitrinebox}>
                    <a href=""><img src={vitrine1}></img> </a>
                    <h2>SANTA ROGUE CURVED TRUCKER</h2>
                    <p>$34.95</p>
                    </div>
                    </li>

            </ul>
        </div>
    </div>
  )
}

export default Vitrine