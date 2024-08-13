import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected db")
    } catch (error) {
        console.log(error.message)

    }

}
