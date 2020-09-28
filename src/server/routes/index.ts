import * as express from 'express';

import apiRouter from './api';
import authRouter from './auth';
import mailgunRouter from './mailgun';

const router = express.Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);
router.use('/mailgun', mailgunRouter);

export default router;