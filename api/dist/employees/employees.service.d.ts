import { Employee } from './employee.model';
export declare class EmployeesService {
    private employeeModel;
    constructor(employeeModel: typeof Employee);
    findAll(): Promise<Employee[]>;
}
