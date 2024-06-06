import { UserModel } from "./Model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import EnvConfig from "../../config/EnvConfig";

const response: {
    message: string;
    data?: any;
    success: boolean;
} = { message: "", success: false };
class UserService {
    async userRegister(username: string, password: string, email: string) {
        try {
            const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] }); // checks if user already exists or not by email or username beacause both are unique
            if (existingUser) {
                response.success = false;
                response.message = "User already exists";
                return response;
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new UserModel({
                username,
                email,
                password: hashedPassword
            });
            const res = await user.save();
            if (res) {
                response.success = true;
                response.message = "User registered successfully";
            } else {
                response.success = false;
                response.message = "User not registered";
            }
        } catch (error) {
            response.success = false;
            response.message = "An error occurred while registering the user";
        }
        return response;
    }
    async userLogin(username: string, password: string) {
        const user = await UserModel.findOne({ username });
        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
                const env = EnvConfig();
                const SecretKey = env.secretKey;
                // generate the jwt token
                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || SecretKey, {
                    expiresIn: '1h',
                });
                response.success = true;
                response.message = "User logged in successfully";
                response.data = token;
                return response;
            } else {
                response.success = false;
                response.message = "Invalid password";
                return response;
            }
        } else {
            response.success = false;
            response.message = "User not found";
            return response;
        }
    }
}
export default new UserService