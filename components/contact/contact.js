import React, { useState } from 'react'
import styles from './contact.module.scss'
import Link from 'next/link'
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
});

const [inputs, setInputs] = useState({
    raison: '',
    name: '',
    email: '',
    promesse: '',
    message: '',
    salutation: '',
});

const recaptchaRef = React.createRef();

const handleResponse = (status, msg) => {
    if (status === 200) {
        setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
        });
        setInputs({
            raison: '',
            name: '',
            email: '',
            promesse: '',
            message: '',
            salutation: '',
        });
    } else {
        setStatus({
            info: { error: true, msg: msg },
        });
    }
};

const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
    }));
    setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
};

const handleOnSubmit = async (e) => {
    e.preventDefault();
    recaptchaRef.current.execute();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
};

const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if(!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the 
    // alert
    alert(`Hello, confirmez SVP que vous n'êtes pas un robot en cliquant sur ce bouton pour envoyer votre message :) `);
    // Reset the reCAPTCHA so that it can be executed again if user 
    // submits another email.
    recaptchaRef.current.reset();
  }

    return (
        <>
        <div className={styles.container}>
          <form
                    onSubmit={handleOnSubmit}
                    className={styles.main}
                >
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        onChange={onReCAPTCHAChange}
                    />
                    <h2 className={styles.marge}>Hello</h2>

                    <div className={styles.formgroup}>
                    <label htmlFor='raison'>Je vous contacte parce que
                    < select
                        id="raison"
                        onChange={handleOnChange}
                         >
                        <option value="J'ai une question à vous poser">J&apos;ai une question à vous poser</option>
                        <option value="Bill Gates vous a recommandé">Bill Gates vous a recommandé</option>
                        <option value="Je fais une crise de nerf">Je fais une crise de nerf</option>
                    </select >
                      </label>
                    </div>

                    <div className={styles.formgroup}>
                        <label htmlFor="name">Mon nom est</label>
                        <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            onChange={handleOnChange}
                            value={inputs.name}
                            placeholder="votre nom"
                        />
                    </div>

                    <div className={styles.formgroup}>
                        <label htmlFor="email">Vous pouvez me répondre sur</label>
                        <input
                            className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
                            id="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            placeholder="mon email"
                            value={inputs.email}
                        />
                    </div>

                    <div className={styles.formgroup}>
                    <label htmlFor='promesse'>Tant que vous promettez de ne pas
                    < select
                        id="promesse"
                        onChange={handleOnChange}
                         >
                        <option value="Répondre avec un faux accent anglais">Répondre avec un faux accent anglais</option>
                        <option value="Donner mon email à satan">Donner mon email à satan</option>
                        <option value="ECRIRE TOUT EN CAPITALES">ECRIRE TOUT EN CAPITALES</option>
                    </select >
                      </label>
                    </div>
                    
                    <div className={styles.formgroup}>
                        <label htmlFor="message">Ce que je veux vous dire c&apos;est</label>
                        <textarea
                            className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
                            id="message"
                            onChange={handleOnChange}
                            required
                            rows="5"
                            value={inputs.message}
                            placeholder="ça"
                        />
                    </div>

                    <div className={styles.formgroup}>
                    <label htmlFor='salutation'>Merci !
                    < select
                        id="salutation"
                        onChange={handleOnChange}
                         >
                        <option value="High five !">High five !</option>
                        <option value="Check">Check</option>
                        <option value="Bisous">Bisous</option>
                        <option value="Révérence">Révérence</option>
                        <option value="Poutous">Poutous</option>
                        <option value="Clin d'oeil">Clin d&apos;oeil</option>
                        <option value="Grognement indistinct">Grognement indistinct</option>
                        
                    </select >
                      </label>
                    </div>
                    

                    <button
                        type="submit"
                        className={styles.button}                       
                        disabled={status.submitting}
                    >
                        {!status.submitting
                            ? !status.submitted
                                ? 'Envoyer'
                                : 'Bien reçu'
                                : '...'}
                    </button>

                    <div className={styles.clear}></div>

                    <div className="mt-4">
                        {status.info.error && (
                            <div className="error">
                                Error: {status.info.msg}
                            </div>
                        )}
                        {!status.info.error && status.info.msg && (
                            <div className="success">{status.info.msg}</div>
                        )}
                    </div>

                    <p className={styles.rgpd}>En envoyant votre message, 
                    vous acceptez notre <Link href="/confidentialite" target="_blank"><a>politique de confidentialité</a></Link> (pas de mauvaises surprises, promis)</p>
                    
                </form>
                </div>
        </>
        );
    }
    
    export default Contact;