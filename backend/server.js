import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.route.js'
import { connectDb } from './db/connectDb.js'
import messageRouter from './routes/messages.route.js'
import userRoute from './routes/user.route.js'
import { app, server } from './socket/socket.js'
// const app = express()
dotenv.config()
const PORT  = process.env.PORT ||6173

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRouter)
app.use('/api/messages',messageRouter)
app.use('/api/users',userRoute)



server.listen(PORT , ()=>{
    connectDb()
    console.log(`server running on ${PORT}`)
})