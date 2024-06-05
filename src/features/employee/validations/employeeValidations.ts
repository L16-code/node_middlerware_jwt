import Joi from "joi";

export const ValidateCreateEmployee=(employee:{name:string;mobile:number;email:string;dob:string;doj:string})=>{
    const employeeSchema=Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        mobile:Joi.number().min(10).required(),
        dob:Joi.string().required(),
        doj:Joi.string().required()
    })
    return employeeSchema.validate(employee)
}
export const ValidateUpdateEmployee=(employeeUpdate:{name:string;mobile:number;email:string;dob:string;doj:string})=>{
    const employeeUpdateSchema=Joi.object({
        name:Joi.string(),
        email:Joi.string().email(),
        mobile:Joi.number().min(10),
        dob:Joi.string(),
        doj:Joi.string()
    })
    return employeeUpdateSchema.validate(employeeUpdate)
}