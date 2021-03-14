const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxc1ec9ddf33ea45699cbda1550f567373.mailgun.org';
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});

const sendWelcomeEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Thanks for joining us',
        text: `Welcome to the App, ${name}!. Let me know how you get along with the App!`
    };

    mg.messages().send(data, function (error, body) {
        console.log(body);
        console.log(error);
    });
}

const sendCancellationEmail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}!. Hope to see you again, when I see you again!`
    };

    mg.messages().send(data, function (error, body) {
        console.log(body);
        console.log(error);
    }); 
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}