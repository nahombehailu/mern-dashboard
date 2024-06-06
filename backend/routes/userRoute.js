import express from 'express'
import mongoose from 'mongoose'
const router=express.Router()

router.get('/test',(req,res)=>{
    res.json("api working");
});

export default router;

