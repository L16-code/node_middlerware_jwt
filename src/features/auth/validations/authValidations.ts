import Joi from "joi";

export const validateLoginData=(login:{username:string;password:string;email:string})=>{
    const loginSchema=Joi.object({
        username:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(5).max(36).required()
    })
    return loginSchema.validate(login)
}

export const validateUserData=(user:{username:string;password:string;email:string})=>{
    const userSchema=Joi.object({
        username:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(36).required()
    })
    return userSchema.validate(user)
}


