import React from 'react'
import Email from './Email';
import styles from './styles/Contact.module.css';
const Contact = () => {

  React.useEffect(() => {
    document.title = 'PrintZInk - CONTACT';
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.contatobox}>
      <div className={styles.email}>
    <Email />
    </div >
    <div className={styles.box}>

      <h1>MAP</h1>

    </div>
    </div>
    </div>
  )
}

export default Contact