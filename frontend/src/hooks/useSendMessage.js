import {useState} from 'react' 
import useConversasion from '../zustand/useConversasion'
import toast from 'react-hot-toast'
import axios from 'axios'
function useSendMessage() {
    const [loading , setLoading] = useState(false)

    const {messages, setMessages,selectedConversasion} = useConversasion()


    const sendMessage = async (message)=>{
        setLoading(true)
        try {
            // console.log(message)
            const res = await axios.post(`api/messages/send/${selectedConversasion._id}`,{message})
            // console.log(res.data)
            setMessages([...messages,res.data])
            // console.log(message)
            
        } catch (error) {
            toast.error(error)
        
        }
        finally{
            setLoading(false)
        }
    }

    return {loading , sendMessage}
}

export default useSendMessage
