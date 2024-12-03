import express from 'express'
import  {connectDB } from './config/db.js';
import userRoute from './routes/userRoutes.js';
import cors from 'cors'
import 'dotenv/config'



connectDB();
const port =4000;
//middleware
const app=express();
app.use(express.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send('Api working successfully');
})
//setting up routes

app.use('/api/user',userRoute);

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})