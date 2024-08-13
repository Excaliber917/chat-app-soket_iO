import User from "../models/user.model.js"

export const getAllUsers = async (req,res)=>{

    try {
        const logedInUserId = req.user._id
        const allusers = await User.find({_id:{$ne:logedInUserId}}).select("-password")
        if(allusers)
            return res.status(200).json(allusers)
        return res.status(400).json({message:"can not get all users"})

    } catch (error) {
        console.log(error)
        
    }
}