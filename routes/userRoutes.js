import express from 'express'
import { userLogin, userSignup } from '../controllers/userController.js';


const userRoute=express.Router();

userRoute.post("/login",userLogin)
userRoute.post("/signup",userSignup)

export default userRoute;