import { Test, TestingModule } from '@nestjs/testing';
import { ArchitecturesService } from './architectures.service';

describe('ArchitecturesService', () => {
  let service: ArchitecturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArchitecturesService],
    }).compile();

    service = module.get<ArchitecturesService>(ArchitecturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
