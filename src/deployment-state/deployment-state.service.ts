import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from 'src/share/config/config';
import { CreateDeploymentStateDto } from './dto/create-deployment-state.dto';
import { UpdateDeploymentStateDto } from './dto/update-deployment-state.dto';

@Injectable()
export class DeploymentStateService {

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ){}

  async getInfoBuild(build:number):Promise<CreateDeploymentStateDto>{
    var qs=require('qs')
    var data=qs.stringify({'BranchName':'origin/main'})
    var axios = require(this.configService.AXIOS);
    let deploymentState=new CreateDeploymentStateDto()
    var  config={
      method:'get',
      url: this.configService.BASEURLJENKINS+ build +this.configService.INFOBUILDJENKINS,
      Headers:{
        'Authorization': this.configService.TOKENJENKIN
      },
      data:data
    };
    await axios(config)
    .then(function(response){
      JSON.stringify(response.data)
      deploymentState.name = response.data.fullDisplayName
      deploymentState.error = false
      if(response.data.build==false){
        deploymentState.state=`Pendiente`
      }if (response.data.build==true) {
        deploymentState.state=`Proceso`
      }   
      if (response.data.result==`SUCCESS`) {
        deploymentState.state=`Finalizado`
      } else {
        deploymentState.state=`Ejecucion`
        if(response.data.result==`FAILURE`){
          deploymentState.state = `Finalizado`
          deploymentState.error = true
        }
        
      }
    })
    .catch(function(error){
      console.log(error)
    })
    return deploymentState
  }
  
  async getLastBuild(){
    var axios = require(this.configService.AXIOS);
    var log:number;
    var config = {
    method: 'get',
    url: this.configService.BASEURLJENKINS+this.configService.INFOBUILDJENKINS,
    headers: { 
        'Authorization': this.configService.TOKENJENKIN
    }
    };
    
    await axios(config)
    .then(function (response) {
      log= response.data.lastBuild.number
    },
    )
    .catch(function (error) {
      console.log(error);
    });  
    return  log
  }
}
