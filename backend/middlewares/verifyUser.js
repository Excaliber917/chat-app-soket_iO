import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'


const verifyuser = async (req,res,next)=>{
    try {
        const token = req.cookies.cookie;
        // console.log(token)
        if(!token)
            return res.status(400).json({error:"no toekn"})

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!decoded)
            return res.status(400).json({error:"no getting decoded"})

        const user = await User.findById(decoded.userId).select("-password")
        if(!user)
        {
            return res.status(400).json({error:"not getting user"})
        }

        req.user = user

        next()

    } catch (error) {
        console.log(error)
        
    }
}

export default verifyuser