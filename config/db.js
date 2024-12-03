
import mongoose from "mongoose";


export const connectDB = async () => {
    
    await mongoose.connect('mongodb+srv://waqar:waqar392936@cluster0.xmfq6.mongodb.net/?retryWrites=true&w=majority&appName=zapta-practice')
        .then(() => {
           
            console.log("DB Connected");
        })
}