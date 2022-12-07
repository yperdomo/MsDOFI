import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArchitecturesService } from './architectures.service';
import { CreateArchitectureDto } from './dto/create-architecture.dto';
import { UpdateArchitectureDto } from './dto/update-architecture.dto';

@Controller('architectures')
export class ArchitecturesController {
  constructor(private readonly architecturesService: ArchitecturesService) {}

  @Post()
  create(@Body() createArchitectureDto: CreateArchitectureDto) {
    return this.architecturesService.create(createArchitectureDto);
  }

  @Get()
  findAll():CreateArchitectureDto[]{
    return this.architecturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.architecturesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArchitectureDto: UpdateArchitectureDto) {
    return this.architecturesService.update(+id, updateArchitectureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.architecturesService.remove(+id);
  }
}
