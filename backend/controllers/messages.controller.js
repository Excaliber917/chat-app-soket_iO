import Conversation from "../models/conversion.model.js"
import Message from "../models/message.modal.js"
import { getReciverSocketId, io } from "../socket/socket.js"

export const sendMessage = async (req, res) => {

    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversion = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversion) {
            conversion = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversion.message.push(newMessage._id)
        }
        await Promise.all([conversion.save(),newMessage.save()])
        const reciverSocketId = getReciverSocketId(receiverId)

        if(reciverSocketId)
        {
            io.to(reciverSocketId).emit("newMessage",newMessage)
        }




        res.status(200).json(newMessage)






    } catch (error) {
        console.log(error)

    }

}

export const getMessage = async(req, res) => {
    try {
        const { id: userToChatId } = req.params
        const senderId = req.user._id

        const conversion = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("message") //the complete message

        res.status(200).json(conversion?.message)


    } catch(error) {
        console.log(error)

    }
}
