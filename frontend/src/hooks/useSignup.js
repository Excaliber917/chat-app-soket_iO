import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"


function useSignup() {
    const [loading, setLoading] = useState(false)

    const {setUser} = useAuthContext()

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const sucess = handleUserInfo({ password, confirmPassword })

        if (!sucess) return
        setLoading(true)
        try {

            const response = await axios.post('/api/auth/signup', {
                fullName,
                userName,
                password,
                confirmPassword,
                gender
            });
            toast.success("Signup successful!");
            localStorage.setItem("user",JSON.stringify(response.data))
            setUser(response.data)
            // console.log(response.data); // Handle the response data as needed
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
        }
        finally {
            setLoading(false)
        }



    }

    return { loading, signup }

}
export default useSignup


function handleUserInfo({ password, confirmPassword }) {
    if (password !== confirmPassword) {
        toast.error("passwords do not match")
        return false
    }

    if (password.length < 8) {
        toast.error("password must be of length 8 or more")
        return false
    }

    return true


}


