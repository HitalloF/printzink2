import React from 'react'
import maquina1 from '../img/home/maqui1.png'
import maquinass2 from '../img/homebgg2.png'
import maquinass from '../img/homebgg.png'
import faixa2 from '../img/faixa2.png';
import styles from './styles/Home.module.css';
import Galery from './Galery';
import Process from '../img/home/processo.png'
import Banner from './Banner';
const Home = () => {

  React.useEffect(() => {
    document.title = 'PrintZInk - HOME';
  }, []);

  return (
<>
<div className={styles.mobile}>



<img src={maquinass} ></img></div>
      <div  className={styles.maquinasg}>
        <div className={styles.centroimg}>
        <div className={styles.maquina}>
        <img src={maquinass2} ></img>
        </div>
        <div className={styles.maquina}>
        
        </div>
        </div>
</div>

      <div className='container'>

      </div>
        <div className={styles.faixa2}>
          <img src={faixa2}></img>
        </div>
        <div className={styles.galery}>
        <Galery />
        </div>
        <div className={styles.processo}>
          <h1>OUR PROCESS</h1>
          <div className={styles.boximg}>
      <img src={Process} ></img>
      </div>
        </div>
</>
  )
}

export default Home