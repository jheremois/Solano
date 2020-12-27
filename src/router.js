const express = require('express')
const router = express.Router()

const nodemailer = require('nodemailer')

module.exports = () =>{

    router.get('/', (req, res)=> res.render('home'))

    router.post('/mail', async (req, res)=>{
        
        const {name, email, subject,message} = req.body

            const transporter = await nodemailer.createTransport({

            service: 'Gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }

        })

        const mailOptions = await {
            from: process.env.MAIL_USER,
            to: 'jheremy802@gmail.com',
            subject: subject,
            text: `

             -nombre: ${name}

             -email: ${email}

             -mensaje: 
                ${message}
            
            `,
            html: `<h1>${subject}</h1> 
            <h3> ${message}</h3>
            <hr>
            <h4>- ${name}</h4>
            <h4>- ${email}</h4>`
        }
        
        transporter.sendMail(mailOptions, async (err, info)=>{
            if(err){

                res.status(500).send(err.message)
                
            } else{

                res.redirect('/')

            }
        })

    })

    return router

}