import React from 'react'
import styles from './styles/Home.module.css';
import Process from '../img/home/processo.png'

const Home = () => {

  React.useEffect(() => {
    document.title = 'PrintZInk - HOME';
  }, []);

  return (
  <>

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