// const nodemailer = require('nodemailer');

// const sendMail = async function sendMail() {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         secure: true,
//         auth: {
//             user: "saiyamdubey8787@gmail.com",
//             pass: "nurmmdlwtkzevaks",
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: ['saiyamdubey5@gmail.com', 'withatifansari@gmail.com'],
//         subject: '💖',
//         text: 'Hello, Looking Nice ...',
//     };

//     try {
//         const result = await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully ☀️', result);
//     } catch (error) {
//         console.log('Email send failed with error:', error);
//     }
// };

// sendMail();

// const NodeMailer = require("nodemailer");

// const transporter = NodeMailer.createTransport(
//     {
//         host: "smtp.ethereal.email",
//         port: 587,
//         secure: true,
//         auth: {
//             user: "saiyamdubey8787@gmail.com",
//             pass: "nurmmdlwtkzevaks",
//     },
// });

// async function mail(){
//     try{
//         const info = await transporter.sendMail({
//         from: "saiyamdubey8787@gmail.com",
//         to: ['saiyamdubey5@gmail.com', 'withatifansari@gmail.com'],
//         subject: "Hey, I am Atif gandu..!!",
//         text: "Hello my name is Atif coder 2nd in class , I am a potty coder",
//     });
//     console.log(info.messageId);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// mail().catch(console.error);

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: "saiyamdubey8787@gmail.com",
        pass: "nurmmdlwtkzevaks",
    },
});
async function mail() {
    try {
        const info = await transporter.sendMail({
            from: 'saiyamdubey8787@gmail.com',
            to: ['saiyamdubey5@gmail.com', 'withatifansari@gmail.com'],
            subject: 'Atif bhai ke aagai koi bol sakta hai kya !',
            text: 'Hello, this is a test email. check kar gandu',
        });
    } catch (err) {
    }
}

mail().catch(console.error);