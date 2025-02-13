import mongoose from 'mongoose'

const connectDatabase = () => {

    console.log('Esperando conectar com o banco de dados')

    const urlDatabase = process.env.MONGODB_URI;
    
    mongoose.connect(urlDatabase)
    .then(() => console.log('Conectou com o banco'))
    .catch((error) => console.log(error))
}

export default connectDatabase;

