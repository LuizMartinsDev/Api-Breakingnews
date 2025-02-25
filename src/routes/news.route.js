import {Router} from 'express';
import {create, findAllNews, findByIdNews, findTopNews} from '../controllers/news.controller.js';
import {authMiddleware} from '../middlewares/auth.middlewares.js'

const router = Router();


router.post('/',authMiddleware, create);
router.get('/', authMiddleware, findAllNews);
router.get('/top', authMiddleware, findTopNews );
router.get('/:id', authMiddleware, findByIdNews);



export default router