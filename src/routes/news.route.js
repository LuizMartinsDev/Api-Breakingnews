import {Router} from 'express';
import {create, findAllNews, findByIdNews, searchNewsByTitle,  findTopNews,  findNewsByUser} from '../controllers/news.controller.js';
import {authMiddleware} from '../middlewares/auth.middlewares.js'

const router = Router();




router.post('/',authMiddleware, create);

router.get('/', authMiddleware, findAllNews);

router.get('/top', findTopNews );

router.get('/search', searchNewsByTitle);

router.get('/byuser', authMiddleware,  findNewsByUser);

router.get('/:id', authMiddleware, findByIdNews);



export default router