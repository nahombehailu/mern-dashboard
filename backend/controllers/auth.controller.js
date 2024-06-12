import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'
import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'



dotenv.config()
export const signup= async(req,res,next)=>{
   

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

export const signin= async (req,res,next)=>{

    const {email,password}=req.body;
    if(!email || !password || email==='' || password===''){
        return next(errorHandler(404,"All field are required"));
    }
    try {
        
        const validUser=await User.findOne({email})
        if(!validUser){
            return next(errorHandler(404,'user not found'))
        }
        const validPaasword=bcryptjs.compareSync(password,validUser.password)
        if(!validPaasword){
            return next(errorHandler(404,'incorrect password'))
        }

        const token=jwt.sign(
            {id:validUser._id},'nahom');
        const {password:pass,...rest}=validUser._doc    
            res
            .status(201)
            .cookie("access token",token,{
                httpOnly:true
            })
            .json(rest);

    } catch (error) {
        next(error)
    }

}

export const google =async(req,res,next)=>{
    const {name,email,photoURL}=req.body;

    try {
        const user= await User.findOne({email});
        if(user){
            const token=jwt.sign({id:user._id},'nahom');
            const {password,...rest}=User._doc;
            res.status(200).cookie("access token",token,{httpOnly:true}).json(rest)

        }
        else{
            const generatedPassword=Math.random().toString(36).slice(-8) + 
                                    Math.random().toString(36).slice(-8);

            const hashPassword=bcryptjs.hashSync(generatedPassword,10);

            const newUser= new User({
                username:name,
                email,
                password:hashPassword,
                profilePicture:photoURL,
            })
;
            newUser.save()
            const token=jwt.sign(
                {id:validUser._id},'nahom');
            
                res
                .status(201)
                .cookie("access token",token,{
                    httpOnly:true
                })
                .json(rest);
              
        }
        const data=await res.json()
        ;
    } catch (error) {
        console.log(error); 
    }


}