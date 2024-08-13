import jwt from 'jsonwebtoken'

const genToken = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"15d",
    })

    res.cookie("cookie",token,{
        maxAge:15*24*60*60*1000, //milisecs
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV || "VED"
        // secure:false
    })

}

export default genToken