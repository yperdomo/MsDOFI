import { Test, TestingModule } from '@nestjs/testing';
import { CountAwsController } from './count-aws.controller';
import { CountAwsService } from './count-aws.service';

describe('CountAwsController', () => {
  let controller: CountAwsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountAwsController],
      providers: [CountAwsService],
    }).compile();

    controller = module.get<CountAwsController>(CountAwsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
