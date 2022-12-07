import { Module } from '@nestjs/common';
import { ArchitecturesService } from './architectures.service';
import { ArchitecturesController } from './architectures.controller';

@Module({
  controllers: [ArchitecturesController],
  providers: [ArchitecturesService]
})
export class ArchitecturesModule {}
