import axios from 'axios'
import  { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useConversasion from '../zustand/useConversasion'

function useGetMessages() {
    const [loading ,setLoading] = useState(false)

    const {messages, setMessages,selectedConversasion} = useConversasion()

    useEffect(()=>{
        const getMessage = async ()=>{
            try {
                const res = await axios.get(`/api/messages/${selectedConversasion._id}`)
                // console.log(res.data)
                setMessages(res.data)
                // console.log(messages)
            } catch (error) {
                toast.error(error)
                
            }
            finally{
                setLoading(false)
            }

        }
        if(selectedConversasion?._id) getMessage()
    },[selectedConversasion?._id,setMessages])

    return {loading,messages}
 
}

export default useGetMessages
