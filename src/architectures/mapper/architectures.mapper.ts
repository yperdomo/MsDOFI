import { CreateArchitectureDto } from "../dto/create-architecture.dto";
import { Architecture } from "../entities/architecture.entity";

export class ArchitecturesMapper{

   dtoToEntity(dto:CreateArchitectureDto):Architecture{
    var entity= new Architecture();
    entity.type=dto.type
    entity.example=dto.example
    entity.resume=dto.resume
    entity.total_cost=dto.total_cost
    return entity
   }

   entityToDto(entity:Architecture):CreateArchitectureDto{
    var dto= new CreateArchitectureDto();
    dto.example=entity.example
    dto.resume=entity.resume
    dto.total_cost=entity.total_cost
    dto.type=entity.type
    return dto
   }
}