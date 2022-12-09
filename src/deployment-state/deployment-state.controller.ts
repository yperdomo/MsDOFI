import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeploymentStateService } from './deployment-state.service';
import { CreateDeploymentStateDto } from './dto/create-deployment-state.dto';
import { UpdateDeploymentStateDto } from './dto/update-deployment-state.dto';

@Controller('deployment-state')
export class DeploymentStateController {
  constructor(private readonly deploymentStateService: DeploymentStateService) {}

  @Get()
  async findAll() {
     let numero= await this.deploymentStateService.getLastBuild()
     await this.deploymentStateService.getInfoBuild(numero)
    return await this.deploymentStateService.getInfoBuild(numero)
  }

}
