import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {

    constructor(
        private departmentsService: DepartmentsService
    ) { }

    @Get()
    async getAllDepartments(@Res() res: Response): Promise<void> {
        try {
            console.log("Going to get all departments");
            const departments = await this.departmentsService.findAll();
            if (departments) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Success',
                    data: departments,
                });
            } else {
                res.status(HttpStatus.BAD_REQUEST).send({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Bad Request',
                    data: [],
                });
            }
        } catch (error) {
            console.log("An error occured when getting departments: ", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
                data: null,
            });
        }
    }

    @Get('/:deptId')
    async getDepartmentById(
        @Param('deptId', ParseIntPipe) id: number,
        @Res() res: Response
    ): Promise<void> {
        try {
            console.log(`Going to fetch department details for id ${id}`);
            const department = await this.departmentsService.findOne(id);
            if (department) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Success',
                    data: department,
                });
            } else {
                res.status(HttpStatus.NOT_FOUND).send({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: `An department with id ${id} is not found in the database`,
                    data: null,
                });
            }
        } catch (error) {
            console.log("An error occured when fetching department details", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
                data: null,
            });
        }
    }

}
