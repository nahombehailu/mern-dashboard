import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'
import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";




export const signup= async(req,res,next)=>{
    dotenv.config()

    const {username,email,password}=req.body;
    if(!username || !email || !password || username===''|| email==='' || password==='' ){
        return next(errorHandler("404","All fields are required"))
    }
    const hashPassword=bcryptjs.hashSync(password,10)
    const newUser=new User({
        username,
        email,
        password:hashPassword
    })
   try {
    await newUser.save();
    res.status(200).json("signup succesfull")

   } catch (error) {
   next(error)
   }
}