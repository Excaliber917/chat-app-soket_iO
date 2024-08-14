import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"
import axios from "axios"

function useLogin() {

    const [loading, setLoading] = useState(false)
    const { setUser } = useAuthContext()

    const login = async ({ userName, password }) => {

        const success = handleInputs({ userName, password })
        if (!success) return
        setLoading(true)

        try {
            const res = await axios.post("/api/auth/login", {
                userName,
                password
            })

            // console.log(res.data)
            toast.success("Login successful!");
            localStorage.setItem("user", JSON.stringify(res.data))
            setUser(res.data)

        } catch (error) {
            toast.error(error.response?.data?.error || "Login failed");
        }

        finally {
            setLoading(false)
        }

    }

    return { loading, login }
}

export default useLogin


function handleInputs({ userName, password }) {
    if (!userName || !password) {
        toast.error("All fields must be filled")
        return false
    }

    if (password.length < 8) {
        toast.error("password must have 8 character or long")
        return false
    }

    return true
}