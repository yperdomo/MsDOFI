import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { DeploymentStateModule } from './deployment-state/deployment-state.module';
import { ArchitecturesModule } from './architectures/architectures.module';
import { CountAwsModule } from './count-aws/count-aws.module';
import { TeamSlugModule } from './team-slug/team-slug.module';
import { PriceModule } from './price/price.module';
import configuration from './share/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    HttpModule,
    DeploymentStateModule,
    ArchitecturesModule,
    CountAwsModule,
    TeamSlugModule,
    PriceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
