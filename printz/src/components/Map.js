import React from 'react'
import map from '../img/map.png'
import styles from './styles/Map.module.css'
const Map = () => {
  return (
    <section className={styles.map} >
        <h1>MAP</h1>
        <div>
        <a href="https://www.google.com/maps?q=1441+SW+10th+Ave,+Pompano+Beach,+FL+33069,+EUA&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi-hsrd3Pn7AhW0ILkGHbJpCzQQ_AUoAXoECAIQAw" target="_blank"> <img src={map}></img></a> 
        </div>
    </section>
  )
}

export default Map