import express from 'express';
import userRouter from './src/routes/user.route.js';

const app = express();
const porta = 3200;

app.use(express.json());

app.use('/user', userRouter)

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))