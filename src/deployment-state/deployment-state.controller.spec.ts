import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentStateController } from './deployment-state.controller';
import { DeploymentStateService } from './deployment-state.service';

describe('DeploymentStateController', () => {
  let controller: DeploymentStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeploymentStateController],
      providers: [DeploymentStateService],
    }).compile();

    controller = module.get<DeploymentStateController>(DeploymentStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
