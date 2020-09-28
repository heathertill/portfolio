import * as express from 'express';
import { sendEmail } from '../../utils/mailgun/email';

const router = express.Router();
    
router.post('/', async (req, res, next) => {
    try {
        await sendEmail('htillwebdev@gmail.com', req.body.from, req.body.subject, req.body.message);
        res.send('email sent');
        console.log('email sent')
        console.log('from ', req.body.from, 'subject ', req.body.subject, 'message ', req.body.message)
    } catch (err) {
        console.log('no email')
        console.log(err);
        res.status(500);
    }
});

export default router;