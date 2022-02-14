const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express()
const Template = require('./template');

require('dotenv').config();


//middleware
app.use(express.json());
app.use(cors());



// Crea una instancia de nodemailer
let transporter = nodemailer.createTransport({
    host: 'c1910762.ferozo.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'no-reply@c1910762.ferozo.com',
        pass: process.env.pass
    },
    secureConnection:true,
    tls:{
        rejectUnauthorized:false
    },
    // dkim:{
    //     domainName:'c1910762.ferozo.com',
    //     keySelector:'key1',
    //     privateKey:process.env.privateKey
    // }



    // service: 'gmail',
    // auth: {
    //     type: 'OAuth2',
    //     user: process.env.EMAIL,
    //     pass: process.env.PASSWORD,
    //     clientId: process.env.CLIENT_ID,
    //     clientSecret: process.env.CLIENT_SECRET,
    //     refreshToken: process.env.REFRESH_TOKEN,
    //     accessToken: process.env.ACCESS_TOKEN

    // },
});

// verifica configuración de SMTP
transporter.verify(function (error, success) {
    error ? console.log(error) : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.get('/send', (req, res) => {
    res.send('sección de envío de correos');

});


app.post('/send', async (req, res) => {
    // creamos una cURL para enviar el correo que será accedida por una api
    let email = req.body.email;
    let name = req.body.name;
    let message = req.body.message;
    let getDate = new Date();
    let date = getDate.toLocaleString('es-ES', {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        weekday: "long",
        timeZoneName: "short"
    })
    
    console.log(email, name, message);
    // crea objeto de mensaje
    let mailOptions = {
        from: 'DV diseño web <no-reply@c1910762.ferozo.com>',
        to: process.env.EMAIL,
        subject: `Mensaje de ${name}`,
        replyTo: email,
        envelope:{
            from: 'Sitio Diego Villegas <no-reply@c1910762.ferozo.com>',
            to: process.env.EMAIL
        },
    
        text: `Esto se muestra si no hay html`,
        html: Template.Template_texto_comun(name, message, date)

    };

    transporter.sendMail(mailOptions, (error, info) => {
        // envia mail
        if (error) {
            res.json({
                tragedy: true,
                respuesta: "no se ha podido enviar su mensaje " + error.message + " " + info
            })

        } else {
            console.log(`Message sent`);
            res.json({
                tragedy: false,
                respuesta: "mensaje enviado"

            })
        }

    });

});
let port = process.env.PORT || 8000;


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});