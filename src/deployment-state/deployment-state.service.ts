import { Injectable } from '@nestjs/common';
import { CreateDeploymentStateDto } from './dto/create-deployment-state.dto';
import { UpdateDeploymentStateDto } from './dto/update-deployment-state.dto';

@Injectable()
export class DeploymentStateService {
  
  getLastBuild(){
    var qs=require('qs')
    var data=qs.stringify({'BranchName':'origin/main'})
    var axios = require('axios');
    var log=0;
    var config = {
    method: 'get',
    url: 'http://192.168.100.158:9090/job/notificacion-slack/api/json?pretty=true',
    headers: { 
        'Authorization': 'Bearer 11ac77383751eeaf6f9789a4939e635989', 
        'Cookie': 'JSESSIONID.aea1b42f=node01klegwqu7dtwshvkf6v9jgfwy56.node0'
    }
    };
    
    axios(config)
    .then(function (response) {
      var LastBuild=response.data.lastBuild.number
      var config2={
        method:'get',
        url:`http://192.168.100.158:9090/job/notificacion-slack/${LastBuild}/api/json?pretty=true`,
        Headers:{
          'Authorization':'Basic 11ac77383751eeaf6f9789a4939e635989',
          'Content-Type':'application/x-www-form-urlencoded'
        },
        data:data
      };
      axios(config2)
      .then(function(response){
        //console.log(JSON.stringify(response.data))
        JSON.stringify(response.data)
        console.log(response.data)
        //console.log(response.data.building)
      })
      .catch(function(error){
        console.log(error)
      })
      log=response.data.lastBuild.number*1
    })
    .catch(function (error) {
      console.log(error);
    });
    return log
  }
}
