// import * as mailgunLoader from 'mailgun-js';
import config from '../../config';

let mailgun = require('mailgun-js')({
    apiKey: config.mailgun.apiKey,
    domain: 'sandboxfc8c545431634e5cb626c95e72fa6f34.mailgun.org'
})

// let mailgun = mailgunLoader({
//     apiKey: config.mailgun.apiKey,
//     domain: 'sandboxfc8c545431634e5cb626c95e72fa6f34.mailgun.org'
// });

const sendEmail = (to: string, from: string, subject: string, content: string) => {
    // using 'content' instead of 'text' => can send html or text
    let data = {
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data); // sends a promise => async
};

export { sendEmail }

