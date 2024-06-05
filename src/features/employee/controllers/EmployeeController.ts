import express from 'express';
import { EmployeeModel } from '../model/EmployeeModel';
import { ValidateCreateEmployee } from '../validations/employeeValidations';
class EmployeeController {
    getAllEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const employees = await EmployeeModel.find();
            return response.status(200).json({ data: employees })
        } catch (error) {
            return response.sendStatus(400)
        }
    }
    getEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const employees = await EmployeeModel.findById(id);
            return response.status(200).json({ data: employees })
        } catch (error) {
            return response.sendStatus(400)
        }
    }
    createEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const valid = ValidateCreateEmployee(request.body)
            // console.log(valid)
            if (valid.error) {
                return response.status(201).json({ message: "employees is not created", error: valid.error.details[0].message })
            }
            const { name, email, mobile, dob, doj } = request.body;
            const employee = new EmployeeModel({
                name,
                email,
                mobile,
                dob,
                doj
            })
            await employee.save()
            return response.status(201).json({ message: "employees created", data: employee })
        } catch (error) {
            return response.sendStatus(400)
        }
    }
    updateEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const valid = ValidateCreateEmployee(request.body)
            // console.log(valid)
            if (valid.error) {
                return response.status(201).json({ message: "employees is not Updated", error: valid.error.details[0].message })
            }
            const { id } = request.params;
            const { name, email, mobile, dob, doj } = request.body;
            const employee = await EmployeeModel.findById(id)
            if (employee) {
                employee.name = name;
                employee.email = email;
                employee.mobile = mobile;
                employee.dob = dob;
                employee.doj = doj;
                await employee.save()
                return response.status(200).json({ message: "employees updated", data: employee })
            }
            // await employee.save()
        } catch (error) {
            return response.sendStatus(400)
        }
    }
    deleteEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            // return id;
            await EmployeeModel.findByIdAndDelete({ _id: id });
            return response.status(200).json({ message: "employees deleted" })

        } catch (error) {
            return response.sendStatus(400)
        }
    }
}
export default new EmployeeController();