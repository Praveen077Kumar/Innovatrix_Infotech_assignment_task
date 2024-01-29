import bcryptjs from "bcryptjs";
import User from  '../models/userSchema.model.js'

export const userSignup = async (req, res, next)=>{
    const {username,email,password}= req.body;
    const hashedPassword =bcryptjs.hashSync(password,10)

    const newUser = new User({username,email,password:hashedPassword});

    try {
        await newUser.save();
        res.status(201).json({
            message:"user Created successfully"
        })
    } catch (error) {
        next(error);
    }

}