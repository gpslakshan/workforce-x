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

    async findOne(id: number): Promise<Employee> {
        try {
            console.log("Starting to fetch employee details from the DB");
            return await this.employeeModel.findOne({
                where: {
                    emp_id: id,
                },
            });
        } catch (error) {
            console.log("An error occured when fetching employee details from the DB")
        }
    }

}
