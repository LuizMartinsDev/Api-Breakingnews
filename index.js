const express = require('express');
const userRouter = require('./src/routes/user.route.js');
const app = express();
const porta = 3200;

app.use('/', userRouter)

app.listen(porta)