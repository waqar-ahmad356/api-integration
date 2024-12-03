import validator from "validator";
import User from "../model/userModel.js";
import jwt from 'jsonwebtoken';

const createToken=(id,role)=>{
    return jwt.sign({id,role},process.env.JWT_SECRET,{expiresIn:"1h"})
}

const userLogin=async(req,res)=>{
    const {email,password,role}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Email is not registered"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalid email"});
        }
       
        
         
         const token=createToken(user._id,user.role);
         res.status(201).json({message:"Login successfully",token})


        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    
        
    }

}
const userSignup=async(req,res)=>{
    const {name,email,password,role}=req.body;
    try {
        const exists=await User.findOne({email});
        if(exists){
            return res.status(400).json({message:"Email already exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Invalid email"});
        }
        const newUser= new User({
            name:name,
            email:email,
            password:password,
            role:role,
            
        })
        
         const user= await newUser.save();
         const token=createToken(user._id,user.role);
         res.status(201).json({message:"User created successfully",token})


        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    
        
    }
    
}

export {userLogin,userSignup};