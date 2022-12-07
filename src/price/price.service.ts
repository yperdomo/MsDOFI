import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { Price } from './entities/price.entity';
import { PriceMapper } from './mapper/price.mapper';

@Injectable()
export class PriceService {
  create(createPriceDto: CreatePriceDto) {
    return 'This action adds a new price';
  }

  findAll() {
    var priceMapper = new PriceMapper()
    var price = new Price()
    var prices: CreatePriceDto[] = [];

    for(let i = 0; i < 3; i++){
      price.descripcion=`hola`
      price.name=`prodcut ${i}`
      price.price=i
      prices[i]=priceMapper.entityToDto(price)
    }
    return prices;
  }

  findOne(id: number) {
    return `This action returns a #${id} price`;
  }

  update(id: number, updatePriceDto: UpdatePriceDto) {
    return `This action updates a #${id} price`;
  }

  remove(id: number) {
    return `This action removes a #${id} price`;
  }
}
