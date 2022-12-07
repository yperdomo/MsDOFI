import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamSlugDto } from './create-team-slug.dto';

export class UpdateTeamSlugDto extends PartialType(CreateTeamSlugDto) {}
