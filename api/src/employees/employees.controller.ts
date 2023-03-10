import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Response } from 'express';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';


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
    async getEmployeeById(
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

    @Post()
    async createEmployee(
        @Body() createEmployeeDto: CreateEmployeeDto,
        @Res() res: Response
    ): Promise<void> {
        try {
            console.log(`Going to create employee: ${createEmployeeDto}`);
            const employee = await this.employeesService.create(createEmployeeDto);
            if (employee) {
                res.status(HttpStatus.CREATED).send({
                    statusCode: HttpStatus.CREATED,
                    message: 'Employee created successfully',
                });
            } else {
                res.status(HttpStatus.BAD_REQUEST).send({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Bad Request',
                });
            }
        } catch (error) {
            console.log("An error occured while creating employee", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
            });
        }
    }

    @Put('/:empId')
    async updateEmployeeById(
        @Param('empId', ParseIntPipe) id: number,
        @Body() updateEmployeeDto: UpdateEmployeeDto,
        @Res() res: Response
    ) {
        try {
            console.log(`Going to update employee of empId ${id}`);
            const updateRes = await this.employeesService.update(updateEmployeeDto, id);
            if (updateRes) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Employee updated successfully',
                });
            } else {
                res.status(HttpStatus.BAD_REQUEST).send({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Bad Request',
                });
            }
        } catch (error) {
            console.log("An error occured while updating employee", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
            });
        }
    }

    @Delete('/:empId')
    async deleteEmployeeById(
        @Param('empId', ParseIntPipe) id: number,
        @Res() res: Response
    ) {
        try {
            console.log(`Going to delete employee of empId ${id}`);
            const deleteRes = await this.employeesService.delete(id);
            if (deleteRes) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Employee deleted successfully',
                });
            } else {
                res.status(HttpStatus.BAD_REQUEST).send({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Bad Request',
                });
            }
        } catch (error) {
            console.log("An error occured while deleting employee", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
            });
        }
    }



}
