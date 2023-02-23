import mongoose from 'mongoose';

const DB_URI = `${process.env.DB_URI}`

const dbConnection = async () => {
    try {

        await mongoose.set('strictQuery', false);
        await mongoose.connect(DB_URI);
        console.log('Base de datos conectada!!!');

    } catch (error) {
        console.log(error)
        throw Error('Error al conectar la base de datos')
    }
}


export default dbConnection;