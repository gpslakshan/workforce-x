import { Controller, Get, Param } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(
        private employeesService: EmployeesService
    ) { }

    @Get()
    async getAllEmployees(): Promise<any> {
        try {
            console.log("Going to get all employees");
            const data = await this.employeesService.findAll();
            if (data) {
                return {
                    statusCode: 200,
                    message: 'Success',
                    data: data,
                }
            } else {
                return {
                    statusCode: 400,
                    message: 'Failed',
                    data: null
                }
            }
        } catch (error) {
            console.log("An error occured when getting employees: ", error);
            return {
                statusCode: 500,
                message: 'Failed',
                error: error
            }
        }
    }

    @Get('/:empId')
    getEmployee(@Param('empId') id: string): any {
        return '';
    }



}
