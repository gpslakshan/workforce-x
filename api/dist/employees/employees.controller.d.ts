import { EmployeesService } from './employees.service';
export declare class EmployeesController {
    private employeesService;
    constructor(employeesService: EmployeesService);
    getAllEmployees(): any;
    getEmployee(id: string): any;
}
