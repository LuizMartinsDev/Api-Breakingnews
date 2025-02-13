import express from 'express';
import userRouter from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';
import dotenv from 'dotenv';

const app = express();
const porta = process.env.PORT || 3200;

dotenv.config();

app.use(express.json());

connectDatabase();

app.use('/user', userRouter)

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))