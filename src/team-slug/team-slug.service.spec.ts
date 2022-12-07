import { Test, TestingModule } from '@nestjs/testing';
import { TeamSlugService } from './team-slug.service';

describe('TeamSlugService', () => {
  let service: TeamSlugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamSlugService],
    }).compile();

    service = module.get<TeamSlugService>(TeamSlugService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
