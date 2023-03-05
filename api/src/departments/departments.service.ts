import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Department } from './department.model';

@Injectable()
export class DepartmentsService {

    constructor(
        @InjectModel(Department)
        private departmentModel: typeof Department,
    ) { }

    async findAll(): Promise<Department[]> {
        try {
            console.log("Going to fetch all the departments from the DB");
            return await this.departmentModel.findAll();
        } catch (error) {
            console.log("An error occuered while fetching the departments.", error);
        }
    }

    async findOne(id: number): Promise<Department> {
        try {
            console.log("Starting to fetch department details from the DB");
            return await this.departmentModel.findOne({
                where: {
                    dept_id: id,
                },
            });
        } catch (error) {
            console.log("An error occured when fetching department details from the DB")
        }
    }


}
