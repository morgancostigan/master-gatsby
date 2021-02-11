const nodemailer = require('nodemailer');

function generateOrderEmail({order, total}) {
    return `<div>
        <h2>Your Slick's Slices Order for ${total}.</h2>
        <p>Come on down, your order will be ready in 20 minutes.</p>
        <ul>
            ${order.map(item => `<li>
                <img src="${item.thumbnail}" alt="${item.name}"/>
                ${item.size} ${item.name} - ${item.price}
            </li>`).join('')}
        </ul>
        <p>Your total is <strong>${total}</strong>, due at pickup.</p>
        <style>
            ul {
                list-style: none;
            }
        </style>
    </div>`;
}

//create a transport for nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// function wait(ms = 0) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms);
//     });
// };

exports.handler = async(event, context) => {
    // await wait(5000);
    //validate the data coming in is OK
    const body = JSON.parse(event.body);
    //check for dreadPirateJimmy honeypot 
    if (body.dreadPirateJimmy) {
        return {
            statusCode: 400,
            body: JSON.stringify({ 
                message: 'Evil natured robots not welcome. Error 8675309'
            })
        }
    }
    
    const requiredFields = ['email', 'name', 'order'];
    for(const field of requiredFields){
        console.log(`Checking for valid ${field}.`);
        if(!body[field]){
    //return error message
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: `Oh zang! You are missing the ${field} field!`
                })
            }
        }
    }

    //check that order is not empty before submission
    if (!body.order.length) {
        //return error message
        return {
            statusCode: 400,
            body: JSON.stringify({ 
                message: `Silly goose, you can't send empty orders!` 
            })
        }
    }

    //send email
    const info = await transporter.sendMail({
        from: "Slick's Slices <slick@example.com>",
        to: `${body.name} <${body.email}>`,
        subject: `New Order for ${body.name}!`,
        html: generateOrderEmail({ order: body.order, total: body.total }),
    })
    console.log({info});
    //return success message

    return {
        statusCode: 200,
        body: JSON.stringify({message: 'Success'})
    }
}