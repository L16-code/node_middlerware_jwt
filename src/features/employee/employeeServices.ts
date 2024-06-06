import { EmployeeModel } from "./EmployeeModel";

const response: {
    message: string;
    data?: any;
    success: boolean;
} = { message: "", success: false };
class EmployeeService{
    async createEmployee(name:string, email:string, mobile:number, dob:string ,doj:string) {
        const employee = new EmployeeModel({ name,email,mobile,dob,doj
        });
        const res=await employee.save();
        if(res){
            response.success=true;
            response.message="Employee Created successfully"
            return response;
        }else{
            response.success=false;
            response.message="Employee not Created"
            return response;
        }
    }
    async getAllEmployees() {
        const employees = await EmployeeModel.find();
        if(employees){
            response.success=true;
            response.message="Employees fetched successfully"
            response.data=employees;
            return response;
        }else{
            response.success=false;
            response.message="Employees not fetched"
            return response;
        }
    }
    async getEmployee(id:string) {
        const employee = await EmployeeModel.findById(id);
        if(employee){
            response.success=true;
            response.message="Employee fetched successfully"
            response.data=employee;
            return response;
        }else{
            response.success=false;
            response.message="Employee not fetched"
            return response;
        }
    }
    async updateEmployee(id:string,name:string, email:string, mobile:number, dob:string,doj:string) {
        const employee = await EmployeeModel.findById(id);
        if(employee){
            employee.name=name;
            employee.email=email;
            employee.mobile=mobile;
            employee.dob=dob;
            employee.doj=doj;
            const res=await employee.save();
            if(res){
                response.success=true;
                response.message="Employee updated successfully"
                return response;
            }else{
                response.success=false;
                response.message="Employee not updated"
                return response;
            }
        }else{
            response.success=false;
            response.message="Employee not found"
            return response;
        }
    }
    async deleteEmployee(id:string) {
        const employee = await EmployeeModel.findByIdAndDelete(id);
        if(employee){
            response.success=true;
            response.message="Employee deleted successfully"
            return response;
        }else{
            response.success=false;
            response.message="Employee not deleted"
            return response;
        }
    }
}
export default new EmployeeService;
