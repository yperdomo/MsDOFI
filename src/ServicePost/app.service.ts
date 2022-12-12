import { Injectable, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import { RequestDTO } from '../share/domain/request.dto';
import config from '../share/config/config';
import { lastValueFrom } from 'rxjs';
import { Console, log } from 'console';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    private httpService: HttpService,
  ) {}

  async getHello(requestDTO: RequestDTO){
    try {
      const URL = this.configService.URLJOBJENKINS+requestDTO.jobname+this.configService.URLCOMPLEMENT;

      const data = {
        BranchName: 'origin/main',
      };

      const headers = {
        Authorization: 'Basic' + this.configService.TOKENJENKIN,
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const resposeJenkins = await lastValueFrom(
        this.httpService.post(URL, data, {
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
