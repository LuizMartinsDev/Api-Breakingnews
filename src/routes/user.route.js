import express from 'express'
import {create, findAllUsers, findByIdUser} from '../controllers/user.controller.js'

const router = express.Router();
router.post('/', create)
router.get('/', findAllUsers)
router.get('/:id', findByIdUser)

export default router;