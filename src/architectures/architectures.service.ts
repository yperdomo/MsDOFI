import { Injectable } from '@nestjs/common';
import { CreateArchitectureDto } from './dto/create-architecture.dto';
import { UpdateArchitectureDto } from './dto/update-architecture.dto';
import { Architecture } from './entities/architecture.entity';
import { ArchitecturesMapper } from './mapper/architectures.mapper';

@Injectable()
export class ArchitecturesService {
  
  create(createArchitectureDto: CreateArchitectureDto) {
    return 'This action adds a new architecture';
  }

  findAll(): CreateArchitectureDto[] {
    var architecturesMapper= new ArchitecturesMapper()
    var architectures= new Architecture()
    var architectureDTOs: CreateArchitectureDto[] = [];
    for(let i = 0; i < 3; i++){
      architectures.type=`arquitectura ${i}`
      architectures.total_cost=700+i
      architectures.example='https://...com'
      architectures.resume='architecture front ....'
      var architectureDTO = architecturesMapper.entityToDto(architectures)
      architectureDTOs[i]=architectureDTO
    }
     
    return architectureDTOs;
  }

  findOne(id: number) {
    return `This action returns a #${id} architecture`;
  }

  update(id: number, updateArchitectureDto: UpdateArchitectureDto) {
    return `This action updates a #${id} architecture`;
  }

  remove(id: number) {
    return `This action removes a #${id} architecture`;
  }
}
