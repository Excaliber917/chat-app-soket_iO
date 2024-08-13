import express from 'express'
import verifyuser from '../middlewares/verifyUser.js'
import { getAllUsers } from '../controllers/user.controller.js'

const userRoute = express()

userRoute.get("/",verifyuser,getAllUsers)


export default userRoute