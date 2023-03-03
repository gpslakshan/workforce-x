import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Employee extends Model {

    @Column
    @PrimaryKey
    @AllowNull(false)
    @AutoIncrement
    emp_id: number;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    date_of_birth: Date;

    @Column
    house_no: string;

    @Column
    street: string;

    @Column
    city: string;

    @Column
    state: string;

    @Column
    postcode: string;

    @Column
    email: string;

    @Column
    mobile: string;

    @Column
    salary: number;

    @Column
    department_id: number;

    @Column
    position_id: number;
}