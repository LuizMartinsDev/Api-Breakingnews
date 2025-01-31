const rota = require('express').Router();
const userController = require('../controllers/user.controller')
rota.get('/', userController.soma)

module.exports = rota;