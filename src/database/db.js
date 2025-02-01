import mongoose from 'mongoose'

const connectDatabase = () => {

    console.log('Esperando conectar com o banco de dados')

    const urlDatabase = 'mongodb+srv://luizkwdev:OHNicWiF1tlWUC83@breakingnews-db.bc4kq.mongodb.net/?retryWrites=true&w=majority&appName=Breakingnews-db';
    
    mongoose.connect(urlDatabase)
    .then(() => console.log('Conectou com o banco'))
    .catch((error) => console.log(error))
}

export default connectDatabase;

