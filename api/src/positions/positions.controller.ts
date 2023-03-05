import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {

    constructor(
        private positionsService: PositionsService
    ) { }

    @Get()
    async getAllPositions(@Res() res: Response): Promise<void> {
        try {
            console.log("Going to get all positions");
            const positions = await this.positionsService.findAll();
            if (positions) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Success',
                    data: positions,
                });
            } else {
                res.status(HttpStatus.BAD_REQUEST).send({
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: 'Bad Request',
                    data: [],
                });
            }
        } catch (error) {
            console.log("An error occured when getting positions: ", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
                data: null,
            });
        }
    }

    @Get('/:deptId')
    async getPositionById(
        @Param('deptId', ParseIntPipe) id: number,
        @Res() res: Response
    ): Promise<void> {
        try {
            console.log(`Going to fetch position details for id ${id}`);
            const position = await this.positionsService.findOne(id);
            if (position) {
                res.status(HttpStatus.OK).send({
                    statusCode: HttpStatus.OK,
                    message: 'Success',
                    data: position,
                });
            } else {
                res.status(HttpStatus.NOT_FOUND).send({
                    statusCode: HttpStatus.NOT_FOUND,
                    message: `An position with id ${id} is not found in the database`,
                    data: null,
                });
            }
        } catch (error) {
            console.log("An error occured when fetching position details", error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
                data: null,
            });
        }
    }

}
