import Joi from "joi";
import { MOBILE_LENGTH_REGEX } from "../../utils/commonConstants";

export const employeeSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().regex(MOBILE_LENGTH_REGEX).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }).required(),
    dob: Joi.string().required(),
    doj: Joi.string().required()
})
export const employeeUpdateSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    mobile: Joi.string().regex(MOBILE_LENGTH_REGEX).messages({ 'string.pattern.base': `Phone number must have 10 digits.` }),
    dob: Joi.string(),
    doj: Joi.string()
})
export const employeeIdSchema = Joi.object({
    id: Joi.string().required()
})