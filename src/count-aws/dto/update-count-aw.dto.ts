import { PartialType } from '@nestjs/mapped-types';
import { CreateCountAwDto } from './create-count-aw.dto';

export class UpdateCountAwDto extends PartialType(CreateCountAwDto) {}
