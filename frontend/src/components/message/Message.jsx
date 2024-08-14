import { useAuthContext } from "../../context/AuthContext"
import useConversasion from "../../zustand/useConversasion";

function Message({message}) {
    const hour = new Date(message.updatedAt).getHours()
    const min = new Date(message.updatedAt).getMinutes()

    const {user} = useAuthContext()
    const { selectedConversasion } = useConversasion();

    const fromMe = message.senderId === user._id
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const chat_bg = fromMe ? "bg-success" : "";
    const profilePic = fromMe ? user.profilePic : selectedConversasion?.profilePic

    // console.log(user)



    // console.log(hour,min)
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="userimage" />
                    

                </div>
            </div>
            <div className={`chat-bubble text-white ${chat_bg} `}>{message?.message}</div>
            <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>{`${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`}</div>

        </div>
    )
}

export default Message
