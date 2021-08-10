import styles from './contactform.module.scss'
import { useState } from 'react'


const ContactForm = () => {

    const [raison, setRaison] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [promesse, setPromesse] = useState('')
    const [message, setMessage] = useState('')
    const [salutation, setSalutation] = useState('')
    const [rgpd, setRgpd] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')
    
        let data = {
            raison,
            name,
            email,
            promesse,
            message,
            salutation,
            rgpd
        }
    
        fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true) 
                setRaison('')
                setName('')
                setEmail('')
                setPromesse('')
                setMessage('')
                setSalutation('')
                setRgpd('')
            }
        })
        
      }
 

    return (
        <div className={styles.container}>
            
        <form className={styles.main}>
        <h2 className={styles.marge}>Hello</h2>
        <div className={styles.formgroup}>
        <label htmlFor='raison'>Je vous contacte parce que...</label>
            <select name='raison' id="raison"
                onChange={(e)=>{setRaison(e.target.value)}}>
                <option value="J'ai une question à vous poser">J'ai une question à vous poser</option>
                <option value="Je fais une crise de nerf">Je fais une crise de nerf</option>
                <option value="Bill Gates vous a recommandé">Bill Gates vous a recommandé</option>
            </select>
        </div>

        <div className={styles.formgroup} >
          < label htmlFor='name'>Mon nom est...</label>
          < input type='text' id="name" autoComplete="name" name='name' required
          placeholder="Bond, James Bond" 
          onChange={(e)=>{setName(e.target.value)}} className={styles.inputField} />
        </div>

        <div className={styles.formgroup} >
          < label htmlFor='email'>Vous pouvez me répondre sur...</label>
          < input type='email' id="email" name='email' autoComplete="email" required
            placeholder="mon email" 
            onChange={(e)=>{setEmail(e.target.value)}} className={styles.inputField} />
        </div>

        <div className={styles.formgroup}>
            <label htmlFor='promesse'>Tant que vous promettez de ne pas...</label>
            <select name='promesse' id="promesse"
                onChange={(e)=>{setPromesse(e.target.value)}}>
                <option value="Répondre avec un faux accent anglais">Répondre avec un faux accent anglais</option>
                <option value="Donner mon email à satan">Donner mon email à satan</option>
                <option value="ECRIRE TOUT EN CAPITALES">ECRIRE TOUT EN CAPITALES</option>
            </select>
        </div>

        <div className={styles.formgroup}>
          <label htmlFor='message'>Ce que je veux vous dire c'est...</label>
          <textarea name='message' id="message" placeholder="ça" required
          onChange={(e)=>{setMessage(e.target.value)}} className={styles.inputField} />
        </div>

        <div className={styles.formgroup}>
            <label htmlFor="salutation">Merci !</label>
            <select name='salutation' id="salutation"
            onChange={(e)=>{setSalutation(e.target.value)}}>
                <option value="Bisous">Bisous</option>
                <option value="Check">Check</option>
                <option value="Poutous">Poutous</option>
                <option value="Révérence">Révérence</option>
                <option value="Clin d'oeil">Clin d'oeil</option>
                <option value="Grognement indistinct">Grognement indistinct</option>
                <option value="High five !">High five !</option>
            </select>
        </div>

        <div className={styles.formgroup}>
            <input type="radio" required
            name="rgpd" id="rgpd"
            className={styles.radiobutton}
            onChange={(e)=>{setRgpd(e.target.value)}} 
            />
            <label className={styles.rgpd} htmlFor="rgpd">En envoyant votre message, 
            vous acceptez notre politique de confidentialité (pas de mauvaises surprises, promis)</label>
        </div>
         
         <button type="submit" 
          className={`${styles.button} ${styles.btn2}`}
         onClick={(e)=>{handleSubmit(e)}}>
             <span>Envoyer</span>
        </button>

      </form>

    </div>
    );
}



export default ContactForm;