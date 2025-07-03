// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js';


// signup controller
export const signup=async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        const existinguser=await User.findOne({email});
        if(existinguser)return res.status(400).json({msg:'user already exists'});

        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashedPassword});

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
        res.status(201).json({user,token});
    }catch(error){
        res.status(500).json({msg:error})
    }
};

export const signin=async (req,res)=>{
    const{email,password}=req.body;

    try {
        const user=await User.findOne({email});
        if(!user)
            return res.status(404).json({msg:"user not found"});

        const ismatched=await bcrypt.compare(password,user.password);
        if(!ismatched){
            return res.status(401).json({msg:"your passord isincorret"})
        }

        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).json({user,token});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
