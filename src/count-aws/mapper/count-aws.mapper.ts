import { CreateCountAwDto } from "../dto/create-count-aw.dto";
import { CountAw } from "../entities/count-aw.entity";

export class CountAWSMapper{
    dtoToEntity(dto:CreateCountAwDto):CountAw{
        var entity= new CountAw();
        entity.cost=dto.cost
        entity.name=dto.name
        entity.resume=dto.resume
        entity.size=dto.size
        return entity
    }

    entityToDto(entity:CountAw):CreateCountAwDto{
        var dto= new CreateCountAwDto()
        dto.cost=entity.cost
        dto.name=entity.name
        dto.resume=entity.resume
        dto.size=entity.size
        return dto
    }
}