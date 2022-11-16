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
      <h1><strong>BRANDED BILLS</strong></h1>
      <p><strong>Email:     <p><strong>sc@printzink.com</strong></p>
    <p><strong>hb@printzink.com</strong></p> </strong></p>
    <p><strong>Address:</strong></p>
    <p>1441 SW 10th Ave, <strong>Pompano Beach</strong>, FL 33069, <strong>EUA</strong></p>
    </div>
    <div className={styles.box}>
      <h1><strong>INFORMATION</strong></h1>
      <p>ABOUT US</p>
      <p>PRIVACY POLICY</p>
      <p>TERMS AND CONDITIONS</p>
    </div>
    <div className={styles.box}>
      <h1><strong>CUSTOMER SERVICE</strong></h1>
      <p>CONTACT US</p>
      <p>FAQ</p>
      <p></p>


    </div>
    <div className={styles.box}>
      <h1>SOCIAL MIDIA</h1>
      <div>
      <img src={iconinsta}></img> <img src={icontt}></img><img src={iconfb}></img>
      </div>
    </div>


      </div>
      <img src={logo}></img>
      </div>
    </footer>
  )
}

export default Footer