import React from 'react'
import styles from './styles/Footer.module.css';
import logo from '../img/logopz.png'
import icontt from '../img/tticon.png';
import iconinsta from '../img/instaicon.png';
import iconfb from '../img/fbicon.png';
import map from '../img/map.png'
const Footer = () => {
  return (
    <footer >
      <div className={styles.footerlogo}>
      <div className={styles.footer}>
    <div className={styles.box}>
      <h1>PrintZInk</h1>
      <p>Email:     <p>sc@printzink.com</p>
    <p>hb@printzink.com</p> </p>
    <h1>Address</h1>
    <p>1441 SW 10th Ave, Pompano Beach, FL 33069, EUA</p>
    </div>
    <div className={styles.box}>
      <h1>INFORMATION</h1>
      <p>ABOUT US</p>
      <p>PRIVACY POLICY</p>
      <p>TERMS AND CONDITIONS</p>
    </div>
    <div className={styles.box}>
      <h1>CUSTOMER SERVICE</h1>
      
      <a href='https://printzink.com/contact'><p>CONTACT US</p></a>
      <p>FAQ</p>
      <p></p>


    </div>
    <div className={styles.box}>
      <h1>SOCIAL MIDIA</h1>
      <div className={styles.boxredes}>
      <a href='https://www.instagram.com/printzink/'><img src={iconinsta}/> </a><img src={icontt}></img><img src={iconfb}></img>
      </div>
    </div>


      </div>
      <div className={styles.logo}>
      <img src={logo}></img>
      </div>
      </div>
    </footer>
  )
}

export default Footer