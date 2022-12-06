import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import config from './share/config/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private httpService: HttpService,
  ) {}

  async getHello(): Promise<string> {
    try {
      const resposeJenkins = await lastValueFrom(
        this.httpService.post(this.configService.URLJOBJENKINS),
      );
      return 'Hello World!';
    } catch (error) {
      const eMsg = `'Consumer fail to jenkins service' Message: ${error.message}`;
      return eMsg;
    }
  }
}
