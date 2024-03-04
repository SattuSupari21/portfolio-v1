"use server"

export async function SendMail({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.APP_PASSWORD,
        },
    })

    const mailData = {
        from: email,
        to: 'satvikchandra100@gmail.com',
        subject: `Message From ${name}`,
        text: message + " | Sent from: " + email,
        html: `<div>${message}</div><p>Sent from:
    ${email}</p>`
    }

    /*    var mailData = {
            from: process.env.EMAIL_USERNAME,
            to: "satvikchandra100@gmail.com",
            subject: subject,
            text: message,
        };*/

    transporter.sendMail(mailData, function(err: unknown, info: unknown) {
        if (err) {
            console.log(err)
            return { status: 'error', message: 'Error!' }
        }
        else {
            return { status: 'success', message: 'Mail sent successfully!' }
        }
    })
}
