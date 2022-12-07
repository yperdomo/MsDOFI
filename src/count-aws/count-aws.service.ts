import { Injectable } from '@nestjs/common';
import { CreateCountAwDto } from './dto/create-count-aw.dto';
import { UpdateCountAwDto } from './dto/update-count-aw.dto';
import { CountAw } from './entities/count-aw.entity';
import { CountAWSMapper } from './mapper/count-aws.mapper';

@Injectable()
export class CountAwsService {
  create(createCountAwDto: CreateCountAwDto) {
    return 'This action adds a new countAw';
  }

  findAll():CountAw[] {
    var count=new CountAw()
    var countAWSMapper =new CountAWSMapper()
    var counts: CountAw[] = [];

    for(let i = 0; i < 3; i++){
      count.cost=1000
      count.name=`cuenta ${i}`
      count.resume='java'
      count.size= 1000
      var createCountAwDto= countAWSMapper.entityToDto(count)
      counts[i]=createCountAwDto
    }

    return counts;
  }

  findOne(id: number) {
    return `This action returns a #${id} countAw`;
  }

  update(id: number, updateCountAwDto: UpdateCountAwDto) {
    return `This action updates a #${id} countAw`;
  }

  remove(id: number) {
    return `This action removes a #${id} countAw`;
  }
}
