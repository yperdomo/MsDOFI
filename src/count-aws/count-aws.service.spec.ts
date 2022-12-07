import { Test, TestingModule } from '@nestjs/testing';
import { CountAwsService } from './count-aws.service';

describe('CountAwsService', () => {
  let service: CountAwsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountAwsService],
    }).compile();

    service = module.get<CountAwsService>(CountAwsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
