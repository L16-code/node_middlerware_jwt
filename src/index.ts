import  express from "express";
import mongoose from "mongoose";
import router from "./routes";
import authRouter from "./routes/auth";
const app= express();
app.use(express.json());

const MONGO_URL ='mongodb://localhost:27017'
mongoose.connect(MONGO_URL,{
    dbName:"node-app"
}).then(()=>{
    console.log("connected to mongodb");
}).catch((error)=>console.log(error))

app.use("/",router );
app.use('/api/auth', authRouter)
app.listen(4000,()=>{
    console.log("server is running on port http://localhost4000");
})