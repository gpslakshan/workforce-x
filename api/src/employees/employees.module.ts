import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Employee } from './employee.model';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  imports: [SequelizeModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule { }
