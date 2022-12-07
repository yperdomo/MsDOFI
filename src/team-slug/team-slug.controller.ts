import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamSlugService } from './team-slug.service';
import { CreateTeamSlugDto } from './dto/create-team-slug.dto';
import { UpdateTeamSlugDto } from './dto/update-team-slug.dto';

@Controller('team-slug')
export class TeamSlugController {
  constructor(private readonly teamSlugService: TeamSlugService) {}

  @Post()
  create(@Body() createTeamSlugDto: CreateTeamSlugDto) {
    return this.teamSlugService.create(createTeamSlugDto);
  }

  @Get()
  findAll() {
    return this.teamSlugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamSlugService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamSlugDto: UpdateTeamSlugDto) {
    return this.teamSlugService.update(+id, updateTeamSlugDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamSlugService.remove(+id);
  }
}
