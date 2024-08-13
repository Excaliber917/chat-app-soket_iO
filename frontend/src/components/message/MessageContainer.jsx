import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { useState } from "react"
function MessageContainer() {
    const [noChat, setNoChat] = useState(false)
    return (
        <div className="md:min-w-[450px] flex flex-col">

            {noChat ? "select a chat" : (<>
                <div className="bg-slate-500 px-4 py-2 mb-2">
                    <span className="label-text">To:</span> <span className="text-gray-300 font-bold">Dj ghosh</span>
                </div>
                <Messages />
                <MessageInput />

            </>)}



        </div>
    )
}

export default MessageContainer
