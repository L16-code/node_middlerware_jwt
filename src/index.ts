import  express from "express";
import router from "./features/employee/Routes";
import authRouter from "./features/auth/Routes";
import envConfig from "./config/EnvConfig";
import connectDB from "./db/DbConnect";
const app= express();
app.use(express.json());
const env =envConfig();
const port=env.port;
connectDB()


app.use("/",router );
app.use('/api/auth', authRouter)
app.listen(port,()=>{
    console.log("server is running on port http://localhost:"+port);
})