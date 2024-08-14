import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
function useGetConversasion() {

    const [loading, setLoding] = useState(false)

    const [conversasion, setConversasion] = useState([])

    useEffect(() => {

        const getConversasion = async () => {
            setLoding(true)
            try {
                const res = await axios.get('/api/users/')
                setConversasion(res.data)


            } catch (error) {
                toast.error(error)

            } finally {
                setLoding(false)
            }
        }

        getConversasion()

    }, [])

return {loading , conversasion}

}

export default useGetConversasion
