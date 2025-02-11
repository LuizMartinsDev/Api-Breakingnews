import express from 'express'
import {create, findAllUsers, findByIdUser, updateUser} from '../controllers/user.controller.js'
import {validId, validUser} from '../middlewares/global.middlewares.js'
const router = express.Router();
router.post('/', create)
router.get('/', findAllUsers)
router.get('/:id', validId, validUser, findByIdUser)
router.patch('/:id', validId, validUser, updateUser)


export default router;