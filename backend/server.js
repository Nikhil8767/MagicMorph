import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routers/routes.js';
import cors from 'cors';


// const express =require ('express');
// const mongoose=require ('mongoose')
// const dotenv=require ('dotenv');
// const { default: router } = require('./routers/routes');

const app=express();
app.use(express.json());
dotenv.config();
app.use(cors());
app.use('/api',router)

const PORT =process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('mongodb connected');
})

app.get('/',(req,res)=>{
    console.log("hello nikhil");
    res.send("hellow nikil")
    
})

app.listen(PORT,()=>{
    console.log('ruuning on port 30000')
});