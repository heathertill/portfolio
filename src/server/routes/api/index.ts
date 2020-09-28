import * as express from 'express';

import { checkToken} from '../../utils/routerMiddleware';

import itemsRouter from './items';

const router = express.Router();

router.use(checkToken);

router.use('/items', itemsRouter);

export default router;