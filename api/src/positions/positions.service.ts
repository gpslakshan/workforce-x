import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Position } from './position.model';

@Injectable()
export class PositionsService {

    constructor(
        @InjectModel(Position)
        private positionModel: typeof Position,
    ) { }

    async findAll(): Promise<Position[]> {
        try {
            console.log("Going to fetch all the positions from the DB");
            return await this.positionModel.findAll();
        } catch (error) {
            console.log("An error occuered while fetching the positions.", error);
        }
    }

    async findOne(id: number): Promise<Position> {
        try {
            console.log("Starting to fetch position details from the DB");
            return await this.positionModel.findOne({
                where: {
                    position_id: id,
                },
            });
        } catch (error) {
            console.log("An error occured when fetching position details from the DB")
        }
    }

}
