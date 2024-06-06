import express from 'express'
import mongoose from 'mongoose'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/userRoute.js'



const app=express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017')
.then(console.log('mongodb succesfully connected'));


const PORT=process.env.PORT || 3000;

app.listen(PORT,(req,res)=>{
    console.log(`server is running on port ${PORT}`)
});

// app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500
    const message=err.message || "internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

