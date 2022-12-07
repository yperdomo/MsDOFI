import { Test, TestingModule } from '@nestjs/testing';
import { DeploymentStateService } from './deployment-state.service';

describe('DeploymentStateService', () => {
  let service: DeploymentStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeploymentStateService],
    }).compile();

    service = module.get<DeploymentStateService>(DeploymentStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
