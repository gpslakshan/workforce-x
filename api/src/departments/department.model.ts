import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'departments', timestamps: false })
export class Department extends Model {

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    dept_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    manager_id: number;

}