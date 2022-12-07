import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import config from './share/config/config';
import { lastValueFrom } from 'rxjs';
import { Console, log } from 'console';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private httpService: HttpService,
  ) {}

  async getHello(): Promise<string> {
    try {
      const data = {
        BranchName: 'origin/main',
      };

      const headers = {
        Authorization: 'Basic' + this.configService.TOKENJENKIN,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      console.log(
        'Inicio de consumo: ' + this.configService.URLJOBJENKINS + data,
      );
      const resposeJenkins = await lastValueFrom(
        this.httpService.post(this.configService.URLJOBJENKINS, data, {
          headers,
        }),
      );
      console.log(resposeJenkins.toString);
      return 'Hello World';
    } catch (error) {
      const eMsg = `'Consumer fail to jenkins service' Message: ${error.message}`;
      return eMsg;
    }
  }
}
