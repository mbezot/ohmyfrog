import React, { useState } from 'react'
import styles from './contact.module.scss'

const Contact = () => {

  const optionsraison  = [
    {
      label: "J'ai une question à vous poser",
      value: "J'ai une question à vous poser",
    },
    {
      label: "Je fais une crise de nerf",
      value: "Je fais une crise de nerf",
    },
    {
      label: "Bill Gates vous a recommandé",
      value: "Bill Gates vous a recommandé",
    },
  ];

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
});

const [inputs, setInputs] = useState({
    email: '',
    message: '',
    name: '',
    raison: '',
});

const handleResponse = (status, msg) => {
    if (status === 200) {
        setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
        });
        setInputs({
            email: '',
            message: '',
            name: '',
            raison: '',
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



    return (
        <>
        <div className={styles.container}>
          <form
                    onSubmit={handleOnSubmit}
                    className="relative w-full px-4 mx-auto max-w-lg"
                >
                    <h2 className={styles.marge}>Hello</h2>

                    <div className="mt-10">

                    <div className={styles.formgroup}>
                    <label htmlFor='raison'>Je vous contacte parce que...
                      <select
                        id="raison"
                        onChange={handleOnChange}
                        value={inputs.optionsraison}
                        >
                          {optionsraison.map((optionsraison) => (
                            <option key={optionsraison.value} value={optionsraison.value}>{optionsraison.label}</option>
                          ))}
                      </select>
                      </label>
                    </div>

                    <div className={styles.formgroup}>
                        <label htmlFor="name">Mon nom est...</label>
                        <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            onChange={handleOnChange}
                            required
                            value={inputs.name}
                            placeholder="Bond. James Bond."
                        />
                    </div>

                        <label htmlFor="email">Email</label>
                        <input
                            className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
                            id="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            placeholder="your@email.com"
                            value={inputs.email}
                        />
                    </div>
                    
                    <div className="mt-10">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="block w-full p-2 bg-gray-800 border border-white focus:outline-none"
                            id="message"
                            onChange={handleOnChange}
                            required
                            rows="10"
                            value={inputs.message}
                            placeholder="Your message..."
                        />
                    </div>
                    <button
                        className="mt-10 py-2 px-4 border-2 border-white text-white uppercase text-sm tracking-24 bg-transparent hover:bg-white hover:text-gray-900 transition duration-150 ease-in-out"
                        type="submit"
                        disabled={status.submitting}
                    >
                        {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted'
                            : 'Submitting...'}
                    </button>
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
                </form>
                </div>
        </>
        );
    }
    
    export default Contact;