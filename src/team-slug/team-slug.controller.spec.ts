import { Test, TestingModule } from '@nestjs/testing';
import { TeamSlugController } from './team-slug.controller';
import { TeamSlugService } from './team-slug.service';

describe('TeamSlugController', () => {
  let controller: TeamSlugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamSlugController],
      providers: [TeamSlugService],
    }).compile();

    controller = module.get<TeamSlugController>(TeamSlugController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
