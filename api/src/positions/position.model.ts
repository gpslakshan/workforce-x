import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'positions', timestamps: false })
export class Position extends Model {

    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    position_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    description: string;

}