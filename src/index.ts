import  express from "express";
import mongoose from "mongoose";
import router from "./features/employee/employeeRoutes";
import authRouter from "./features/auth/authRoutes";
import envConfig from "./config/EnvConfig";
import connectDB from "./db/DbConnect";
const app= express();
app.use(express.json());
const env =envConfig();
const port=env.port;
connectDB()


app.use("/",router );
app.use('/api/auth', authRouter)
app.listen(4000,()=>{
    console.log("server is running on port http://localhost4000");
})