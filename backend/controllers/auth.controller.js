import User from "../models/user.model.js"
import bcrypt from 'bcrypt'
import genToken from "../utils/token.js"
export const signup = async (req, res) => {
    try {

        const { fullName, userName, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword)
            return res.status(400).json({ error: "password does not match" })
        const user = await User.findOne({ userName })
        console.log(user)

        if (user)
            return res.status(400).json({ message: "user already exists" })

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //profilepic random
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newuser = await User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        //saving user to db
        if (newuser) {
            genToken(newuser._id, res)

            await newuser.save()
            return res.status(200).json({

                _id: newuser._id,
                fullanme: newuser.fullName,
                userName: newuser.userName,
                gender: newuser.gender,
                profilePic: newuser.profilePic,
            })
        }
        else {
            res.status(502).json("bad request")
        }


    } catch (err) {
        console.log(err.message)
        return res.status(404).json({ error: err.message })
    }

}


export const login = async (req, res) => {
    try {

        const { userName, password } = req.body
        const user = await User.findOne({ userName })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")
        // console.log(isPasswordCorrect)
        if (!user || !isPasswordCorrect)
            return res.status(400).json("wrong")

        genToken(user._id, res)
        return res.status(200).json({

            _id: user._id,
            fullanme: user.fullName,
            userName: user.userName,
            gender: user.gender,
            profilePic: user.profilePic,
        })

    }
    catch (error) {
        console.log(err.message)
        return res.status(404).json({ error: err.message })
    }

    // return res.status(200).json({user})

}



export const logout = (req, res) => {
    try {
        res.cookie("cookie","",{maxAge:0})
        res.status(200).json({message:"loged out successfully"})

    } catch (error) {
        console.log(err.message)
        return res.status(404).json({ error: err.message })
    }
}