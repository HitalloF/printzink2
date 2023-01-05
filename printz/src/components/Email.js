import React, { useState } from 'react'
import emaijs from '@emailjs/browser'
import styles from './styles/Email.module.css'


const Email = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

  

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emaijs.send("service_5xg12ej", "template_63e2rij", templateParams, "C4mQpmHGiZreVpeOa")
            .then((r) => {
                console.log('enviado', r.status, r.text)
                setName('')
                setEmail('')
                setMessage('')
                alert("EMAIL SENT!")
            }, (err) => {
                console.log("Erro: ", err)
            })

    }

    return (
        <div className={styles.container}>
              <div className={styles.boxemail}>
            <h1 className="title">CONTACT</h1>
            <h2>Ask for your budget</h2>
            <form className={styles.form} onSubmit={sendEmail}>

                <div className={styles.box}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Type your name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div  className={styles.box}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Type your e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div  className={styles.box}>
                    <textarea
                        className={styles.textarea}
                        placeholder="Type your message..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </div>
                <div className={styles.button}><input type="submit" value="Send" /></div>
            </form>
            

            </div>
         
        </div>
    )
}

export default Email