import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import data from './stati_data/data';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res:Response) {
      res.status(HttpStatus.FOUND).send(data)
  }
}
