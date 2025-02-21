import {Router} from 'express';
import {create, findAllNews} from '../controllers/news.controller.js';
import {authMiddleware} from '../middlewares/auth.middlewares.js'

const router = Router();


router.post('/',authMiddleware, create);
router.get('/', authMiddleware, findAllNews);



export default router