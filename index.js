import express from 'express';
import userRouter from './src/routes/user.route.js';
import connectDatabase from './src/database/db.js';

const app = express();
const porta = 3200;

app.use(express.json());

connectDatabase();

app.use('/user', userRouter)

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))