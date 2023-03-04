import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Position } from './position.model';
import { PositionsController } from './positions.controller';
import { PositionsService } from './positions.service';

@Module({
  imports: [SequelizeModule.forFeature([Position])],
  controllers: [PositionsController],
  providers: [PositionsService]
})
export class PositionsModule { }
