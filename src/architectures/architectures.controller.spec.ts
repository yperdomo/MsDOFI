import { Test, TestingModule } from '@nestjs/testing';
import { ArchitecturesController } from './architectures.controller';
import { ArchitecturesService } from './architectures.service';

describe('ArchitecturesController', () => {
  let controller: ArchitecturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArchitecturesController],
      providers: [ArchitecturesService],
    }).compile();

    controller = module.get<ArchitecturesController>(ArchitecturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
