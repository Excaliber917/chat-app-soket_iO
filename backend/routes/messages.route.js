import express from 'express'
import verifyuser from '../middlewares/verifyUser.js'
import { getMessage, sendMessage } from '../controllers/messages.controller.js'


const messageRouter = express()


messageRouter.post("/send/:id",verifyuser,sendMessage)
messageRouter.get("/:id",verifyuser,getMessage)




export default messageRouter