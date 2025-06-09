import mongoose from "mongoose";


const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('database conneected'))

    await mongoose.connect(`${process.env.MONGO_URI}/lms`)

}


export default connectDB;