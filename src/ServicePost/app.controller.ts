import { Controller, Get, Post, Body } from '@nestjs/common';
import { RequestDTO } from '../share/domain/request.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/post')
  getHello(@Body() requestDTO: RequestDTO ){
    return this.appService.getHello(requestDTO);
  }
}