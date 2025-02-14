import express from 'express';
import dotenv from 'dotenv';

import userRouter from './src/routes/user.route.js';
import authRouter from './src/routes/auth.route.js';

import connectDatabase from './src/database/db.js';


const app = express();
const porta = process.env.PORT || 3200;

dotenv.config();

app.use(express.json());

connectDatabase();

app.use('/user', userRouter);
app.use('/login', authRouter);

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))