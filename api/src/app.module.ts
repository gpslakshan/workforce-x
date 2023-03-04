import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './employees/employee.model';
import { EmployeesModule } from './employees/employees.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DepartmentsModule } from './departments/departments.module';
import { PositionsModule } from './positions/positions.module';

@Module({
  imports: [
    EmployeesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get('HOST'),
        port: +configService.get('PORT'),
        username: configService.get('USERNAME'),
        password: process.env.PASSWORD,
        database: configService.get('DATABASE'),
        models: [Employee],
      }),
      inject: [ConfigService],
    }),
    DepartmentsModule,
    PositionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
