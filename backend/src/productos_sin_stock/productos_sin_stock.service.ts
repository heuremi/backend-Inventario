import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosSinStock } from './entities/productos_sin_stock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosSinStockService {
  constructor(
    @InjectRepository(ProductosSinStock)
    private readonly productoSinStockRepository: Repository<ProductosSinStock>
  ) {}
  async findAll() {
    return await this.productoSinStockRepository.find();
  }

  async findOne(id: number) {
    return await this.productoSinStockRepository.findOne({
      where: { id_producto: id },
      relations: ['producto'],
    });
  }
}
