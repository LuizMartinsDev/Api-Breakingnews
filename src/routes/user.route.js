import express from 'express'
import {create, findAllUsers, findByIdUser, updateUser} from '../controllers/user.controller.js'

const router = express.Router();
router.post('/', create)
router.get('/', findAllUsers)
router.get('/:id', findByIdUser)
router.patch('/:id', updateUser)


export default router;