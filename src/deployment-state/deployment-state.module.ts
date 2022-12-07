import { Module } from '@nestjs/common';
import { DeploymentStateService } from './deployment-state.service';
import { DeploymentStateController } from './deployment-state.controller';

@Module({
  controllers: [DeploymentStateController],
  providers: [DeploymentStateService]
})
export class DeploymentStateModule {}
