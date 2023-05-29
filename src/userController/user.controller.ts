import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { AppService } from "../app.service";
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private readonly appService: AppService) {}

    @Get()
    findUser(@Res({ passthrough: true }) res: Response) {
        console.log("findUser() called");
        res.status(HttpStatus.OK);
        return [];
    }
        
}