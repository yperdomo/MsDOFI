import { Module } from '@nestjs/common';
import { CountAwsService } from './count-aws.service';
import { CountAwsController } from './count-aws.controller';

@Module({
  controllers: [CountAwsController],
  providers: [CountAwsService]
})
export class CountAwsModule {}
