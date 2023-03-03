import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './employees/employee.model';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    EmployeesModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db',
      models: [Employee],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
