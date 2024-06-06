import express from 'express'
import mongoose from 'mongoose'

const userScheme=mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{timestamps:true}
);

const User=mongoose.model("User",userScheme);

export default User;
