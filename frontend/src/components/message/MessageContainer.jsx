import Messages from "./Messages"
import MessageInput from "./MessageInput"
import { useEffect, useState } from "react"
import useConversasion from "../../zustand/useConversasion"
function MessageContainer() {
    // const [noChat, setNoChat] = useState(true)
    const { selectedConversasion, setSelectedConversasion } = useConversasion()
    // console.log(selectedConversasion)
    //clean up the setSelectedConversasion

    useEffect(() => {
        return () => setSelectedConversasion(null)
    }, [setSelectedConversasion])
    return (
        <div className="md:min-w-[450px] flex flex-col">

            {!selectedConversasion ? (<>

            <div className="flex justify-center items-center h-full bg-slate-800">
                <p className="font-bold text-lg capitalize text-success">select a chat to start conversasion</p>
            </div>

            </>) : (<>
                <div className="bg-slate-500 px-4 py-2 mb-2">
                    <span className="label-text">To:</span> <span className="text-gray-300 font-bold">{selectedConversasion.userName}</span>
                </div>
                <Messages />
                <MessageInput />

            </>)}



        </div>
    )
}

export default MessageContainer
