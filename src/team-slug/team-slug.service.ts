import { Injectable } from '@nestjs/common';
import { CreateTeamSlugDto } from './dto/create-team-slug.dto';
import { UpdateTeamSlugDto } from './dto/update-team-slug.dto';

@Injectable()
export class TeamSlugService {
  create(createTeamSlugDto: CreateTeamSlugDto) {
    return 'This action adds a new teamSlug';
  }

  findAll():String[] {
    var teamSlugs: String[] = [];
    for(let i = 0; i < 3; i++){
      teamSlugs[i]=`slug ${i}`
    } 
    return teamSlugs;
  }

  findOne(id: number) {
    return `This action returns a #${id} teamSlug`;
  }

  update(id: number, updateTeamSlugDto: UpdateTeamSlugDto) {
    return `This action updates a #${id} teamSlug`;
  }

  remove(id: number) {
    return `This action removes a #${id} teamSlug`;
  }
}
