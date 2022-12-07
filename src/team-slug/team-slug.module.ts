import { Module } from '@nestjs/common';
import { TeamSlugService } from './team-slug.service';
import { TeamSlugController } from './team-slug.controller';

@Module({
  controllers: [TeamSlugController],
  providers: [TeamSlugService]
})
export class TeamSlugModule {}
