import React from 'react'
import styles from './styles/Contact.module.css';
const Contact = () => {

  React.useEffect(() => {
    document.title = 'PrintZInk - CONTACT';
  }, []);


  return (
    <div className='container'>
      <div className={styles.contact}>
      <h1>Contact</h1>
      <h2>Email</h2>
      <p><strong>sc@printzink.com</strong></p>
    <p><strong>hb@printzink.com</strong></p> 
      <h2>Phone Number</h2>
      <p>PHONE NUMBER:<strong>561 599 1760</strong></p>
    </div>
    </div>
  )
}

export default Contact