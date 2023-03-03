import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {

    constructor(
        @InjectModel(Employee)
        private employeeModel: typeof Employee,
    ) { }

    async findAll(): Promise<Employee[]> {
        try {
            console.log("Going to fetch all the employees from the DB");
            return await this.employeeModel.findAll();
        } catch (error) {
            console.log("An error occuered while fetching the employees.", error);
        }
    }

}
