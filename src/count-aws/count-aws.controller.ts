import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountAwsService } from './count-aws.service';
import { CreateCountAwDto } from './dto/create-count-aw.dto';
import { UpdateCountAwDto } from './dto/update-count-aw.dto';

@Controller('count-aws')
export class CountAwsController {
  constructor(private readonly countAwsService: CountAwsService) {}

  @Post()
  create(@Body() createCountAwDto: CreateCountAwDto) {
    return this.countAwsService.create(createCountAwDto);
  }

  @Get()
  findAll() {
    return this.countAwsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.countAwsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCountAwDto: UpdateCountAwDto) {
    return this.countAwsService.update(+id, updateCountAwDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.countAwsService.remove(+id);
  }
}
