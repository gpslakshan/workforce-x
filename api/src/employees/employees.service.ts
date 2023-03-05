import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DepartmentsService } from 'src/departments/departments.service';
import { PositionsService } from 'src/positions/positions.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {

    constructor(
        @InjectModel(Employee)
        private employeeModel: typeof Employee,
        private departmentsService: DepartmentsService,
        private positionsService: PositionsService
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
            console.log("An error occured when fetching employee details from the DB", error)
        }
    }

    async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
        try {
            console.log("Starting to create and save employee to the DB");
            const deptId = await this.getEmployeeDeptId(createEmployeeDto.department);
            const positionId = await this.getEmployeePositionId(createEmployeeDto.position);

            const createEmployeeData = {
                first_name: createEmployeeDto.first_name,
                last_name: createEmployeeDto.last_name,
                date_of_birth: new Date(createEmployeeDto.date_of_birth),
                house_no: createEmployeeDto.house_no,
                street: createEmployeeDto.street,
                city: createEmployeeDto.city,
                state: createEmployeeDto.state,
                postcode: createEmployeeDto.postcode,
                email: createEmployeeDto.email,
                mobile: createEmployeeDto.mobile,
                salary: createEmployeeDto.salary,
                department_id: deptId,
                position_id: positionId
            };

            console.log("createEmployeeData: ", createEmployeeData);

            return await this.employeeModel.create(createEmployeeData);

        } catch (error) {
            console.log("An error occured while creating & saving the Employee to the DB", error);
        }
    }

    async getEmployeeDeptId(deptName: string): Promise<number> {
        try {
            const departments = await this.departmentsService.findAll();
            const deptId = departments.find(item => item.name === deptName).dept_id;
            console.log(`The department Id of the ${deptName} department is ${deptId}`);
            return deptId;
        } catch (error) {
            console.log("An error occured while fetching the Departments in the EmployeesService", error)
        }
    }

    async getEmployeePositionId(position: string): Promise<number> {
        try {
            const positions = await this.positionsService.findAll();
            const postId = positions.find(item => item.name === position).position_id;
            console.log(`The position Id of the ${position} is ${postId}`);
            return postId;
        } catch (error) {
            console.log("An error occured while fetching the Positions in the EmployeesService", error)
        }
    }

    async update(updateEmployeeDto: UpdateEmployeeDto, id: number) {
        try {
            console.log(`Starting to update employee of id ${id} in the database`);
            const deptId = await this.getEmployeeDeptId(updateEmployeeDto.department);
            const positionId = await this.getEmployeePositionId(updateEmployeeDto.position);

            const updateEmployeeData = {
                first_name: updateEmployeeDto.first_name,
                last_name: updateEmployeeDto.last_name,
                date_of_birth: new Date(updateEmployeeDto.date_of_birth),
                house_no: updateEmployeeDto.house_no,
                street: updateEmployeeDto.street,
                city: updateEmployeeDto.city,
                state: updateEmployeeDto.state,
                postcode: updateEmployeeDto.postcode,
                email: updateEmployeeDto.email,
                mobile: updateEmployeeDto.mobile,
                salary: updateEmployeeDto.salary,
                department_id: deptId,
                position_id: positionId
            };

            return await this.employeeModel.update(updateEmployeeData, {
                where: {
                    emp_id: id,
                }
            });
        } catch (error) {
            console.log(`An error occured while updating the employee of id ${id}`, error)
        }
    }

}
