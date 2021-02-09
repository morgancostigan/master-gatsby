const nodemailer = require('nodemailer');

//create a transport for nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});



exports.handler = async(event, context) => {
    //test send email
    const info = await transporter.sendMail({
        from: "Slick's Slices <slick@example.com>",
        to: "orders@example.com",
        subject: "New Order!",
        html: `<p>You've got a new order!</p>`
    })
    console.log({info});
    
    return {
        statusCode: 200,
        body: JSON.stringify(info)
    }
}