import { CreatePriceDto } from "../dto/create-price.dto";
import { Price } from "../entities/price.entity";

export class PriceMapper {
    dtoToEntity(dto:CreatePriceDto):Price{
        var entity=new CreatePriceDto()
        entity.descripcion=dto.descripcion
        entity.name=dto.name
        entity.price=dto.price
        return entity
    }

    entityToDto(entity:Price):CreatePriceDto{
        var dto=new Price()
        dto.descripcion=entity.descripcion
        dto.name=entity.name
        dto.price=entity.price
        return dto
    }
}