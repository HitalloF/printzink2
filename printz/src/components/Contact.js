import React from 'react'
import Email from './Email';
import styles from './styles/Contact.module.css';
import Map from './Map';
const Contact = () => {

  React.useEffect(() => {
    document.title = 'PrintZInk - CONTACT';
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.contatobox}>
      <div className={styles.emaill}>
    <Email />
    </div >
    <div className={styles.mapbox}>

    <Map />
     
      </div>
    </div>
    </div>
    
  )
}

export default Contact