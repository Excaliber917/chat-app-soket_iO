
import { useEffect } from 'react'
import {useSocketContext} from '../context/SocketContext'
import useConversasion from '../zustand/useConversasion'

function useListenMessages() {

    const {socket }= useSocketContext()
    const {messages,setMessages} = useConversasion()

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            setMessages([...messages,newMessage])
        })

        return ()=> socket?.off("newMessage")
    },[socket,setMessages,messages])

    
 
}

export default useListenMessages
