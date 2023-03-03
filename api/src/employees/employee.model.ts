import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({ tableName: 'employees', timestamps: false })
export class Employee extends Model {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    emp_id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    first_name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    last_name: string;

    @Column({ type: DataType.DATE, allowNull: false })
    date_of_birth: Date;

    @Column({ type: DataType.STRING, allowNull: false })
    house_no: string;

    @Column({ type: DataType.STRING, allowNull: false })
    street: string;

    @Column({ type: DataType.STRING, allowNull: false })
    city: string;

    @Column({ type: DataType.STRING, allowNull: false })
    state: string;

    @Column({ type: DataType.STRING, allowNull: true })
    postcode: string;

    @Column({ type: DataType.STRING, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, allowNull: false })
    mobile: string;

    @Column({ type: DataType.DECIMAL, allowNull: false })
    salary: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    department_id: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    position_id: number;
}