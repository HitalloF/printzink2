import React from 'react'
import styles from './styles/Footer.module.css';
import logo from '../img/logopz.png'
import icontt from '../img/tticon.png';
import iconinsta from '../img/instaicon.png';
import iconfb from '../img/fbicon.png';
import map from '../img/map.png'
const Footer = () => {
  return (
    <section>

      <div className={styles.footer}>
    <div className={styles.left}>
    <div><img src={logo}></img></div>
    <div className={styles.social}>
    <div><img src={icontt}></img></div>
    <div><a href='https://www.instagram.com/printzink/?igshid=YmMyMTA2M2Y=' target="_blank"><img src={iconinsta}></img></a></div>
    <div><img src={iconfb}></img></div>
    </div>

    <div className={styles.about  }>

    </div>
    </div>
    <div className='center'>
       <div className={styles.services}>
        <h3>Service</h3>
        <p><a href='service'><strong>SILK SCREEN</strong></a></p>
        <p><a href='service'><strong>HEAT PRESS</strong></a></p>
        <p><a href='service'><strong>EMBROIDERY</strong></a></p>
        <div>
      </div>
        <div>
   
        </div>
        </div>
    </div>
    <div className={styles.right}>
        <div>
        <h3 id="footer">Contact</h3>
        </div>
<p>1441 SW 10th Ave, <strong>Pompano Beach</strong>, FL 33069, <strong>EUA</strong></p>
<p>PHONE NUMBER:<strong>561 599 1760</strong></p>
    <p><strong>sc@printzink.com</strong></p>
    <p><strong>hb@printzink.com</strong></p> 
    </div>
    </div>  
    
    </section>
  )
}

export default Footer