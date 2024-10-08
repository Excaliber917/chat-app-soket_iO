import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from 'socket.io-client'
 const SocketContext = createContext()


export const useSocketContext = ()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {


    const [socket, setSocket] = useState(null)
    const [onlineUsers, setONlineUsers] = useState([])
    const {user} = useAuthContext()
   

    useEffect(() => {
        if (user) {

            const socket = io("http://localhost:5000",{
                query:{
                    userId : user._id
                }
            })
            // console.log(socket)
            setSocket(socket)

            socket.on("getOnlineUsers",(users)=>{
                setONlineUsers(users)
            })


            return () => socket.close()
        }
        else{
            console.log("no user") // this
            if(socket)
            {
                socket.close()
                setSocket(null)
            }
        }
    }, [user])

    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>

}