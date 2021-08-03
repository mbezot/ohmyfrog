export default function (req, res) {
    
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.gmail.com",
         auth: {
              user: 'melaniebezottrottet@gmail.com',
              pass: process.env.password,
           },
      secure: true,
    });
    
    const mailData = {
        from: 'melaniebezottrottet@gmail.com',
        to: 'melanie@ohmyfrog.fr',
        subject: `Ooooh ! Un nouveau message de ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `
        <p>Je vous contacte parce que ${req.body.raison}</p>
        <p>Mon nom est: ${req.body.name}</p>
        <p>Vous pouvez me répondre sur ${req.body.email}</p>
        <p>Tant que vous promettez de ne pas ${req.body.promesse}</p>
        <p>Message: ${req.body.message}</p>
        <p>Salutation: ${req.body.salutation}</p>
        <p>RGPD: ${req.body.rgpd}</p>
        `
    }
  
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    })
  
    res.status(200)
  }