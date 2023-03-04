import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from 'src/departments/department.model';
import { DepartmentsService } from 'src/departments/departments.service';
import { Position } from 'src/positions/position.model';
import { PositionsService } from 'src/positions/positions.service';
import { Employee } from './employee.model';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [SequelizeModule.forFeature([Employee, Department, Position])],
  controllers: [EmployeesController],
  providers: [EmployeesService, DepartmentsService, PositionsService]
})
export class EmployeesModule { }
