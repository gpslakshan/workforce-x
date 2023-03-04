import { Controller, Get, HttpStatus, Param, ParseIntPipe, Res } from '@nestjs/common';
import { Employee } from './employee.model';
import { EmployeesService } from './employees.service';
import { Response } from 'express';


@Controller('employees')
export class EmployeesController {

    constructor(
        private employeesService: EmployeesService
    ) { }

    @Get()
    async getAllEmployees(@Res() res: Response): Promise<void> {
        try {
            console.log("Going to get all employees");
            const employees = await this.employeesService.findAll();
            if (employees) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Success',
                    data: employees,
                });
            } else {
                res.status(HttpStatus.BAD_REQUEST).send({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Bad Request',
                    data: [],
                });
            }
        } catch (error) {
            console.log("An error occured when getting employees: ", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
                data: null,
            });
        }
    }

    @Get('/:empId')
    async getEmployee(
        @Param('empId', ParseIntPipe) id: number,
        @Res() res: Response
    ): Promise<void> {
        try {
            console.log(`Going to fetch employee details for id ${id}`);
            const employee = await this.employeesService.findOne(id);
            if (employee) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Success',
                    data: employee,
                });
            } else {
                res.status(HttpStatus.NOT_FOUND).send({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: `An employee with id ${id} is not found in the database`,
                    data: null,
                });
            }
        } catch (error) {
            console.log("An error occured when fetching employee details", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
                data: null,
            });
        }
    }

}
