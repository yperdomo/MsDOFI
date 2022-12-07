import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeploymentStateService } from './deployment-state.service';
import { CreateDeploymentStateDto } from './dto/create-deployment-state.dto';
import { UpdateDeploymentStateDto } from './dto/update-deployment-state.dto';

@Controller('deployment-state')
export class DeploymentStateController {
  constructor(private readonly deploymentStateService: DeploymentStateService) {}

  @Get()
  findAll() {
    return this.deploymentStateService.getLastBuild();
  }

}
