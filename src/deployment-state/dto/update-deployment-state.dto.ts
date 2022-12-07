import { PartialType } from '@nestjs/mapped-types';
import { CreateDeploymentStateDto } from './create-deployment-state.dto';

export class UpdateDeploymentStateDto extends PartialType(CreateDeploymentStateDto) {}
