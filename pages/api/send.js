const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, message, raison, promesse, name, salutation } = req.body;

    const content = {
        to: "melanie@ohmyfrog.fr",
        from:"melanie@ohmyfrog.fr",
        subject: `Oooh ! un nouveau message de ${email}`,
        text: message,
        text: raison,
        text: promesse,
        text: name,
        text: salutation,
        html: `
        <p>Je vous contacte parce que ${raison}</p>
        <p>Mon nom est : ${name}</p>
        <p>Vous pouvez me répondre sur : ${email}</p>
        <p>Tant que vous promettez de ne pas ${promesse}</p>
        <p>Ce que je voulais dire c'est :</p>
        <p>${message}</p>
        <p>${salutation}</p>
        `,
    };

    try {
        await sgMail.send(content);
        res.status(200).send('Votre message a bien été envoyé, nous vous recontactons très vite.');
    } catch (error) {
        console.log('ERROR', error);
        res.status(400).send('Houston, on a un problème avec ce formulaire... pouvez-vous nous écrire directement sur melanie@ohmyfrog.fr SVP ?');
    }
}