import { Controller, Get, Param } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(
        private employeesService: EmployeesService
    ) { }

    @Get()
    getAllEmployees(): any {
        return '';
    }

    @Get('/:empId')
    getEmployee(@Param('empId') id: string): any {
        return '';
    }



}
