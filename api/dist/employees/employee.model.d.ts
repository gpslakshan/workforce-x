import { Model } from 'sequelize-typescript';
export declare class Employee extends Model {
    emp_id: number;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    house_no: string;
    street: string;
    city: string;
    state: string;
    postcode: string;
    email: string;
    mobile: string;
    salary: number;
    department_id: number;
    position_id: number;
}
