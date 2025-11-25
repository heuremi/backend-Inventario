import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosSinStock } from './entities/productos_sin_stock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosSinStockService {
  constructor(
    @InjectRepository(ProductosSinStock)
    private readonly productoRepository: Repository<ProductosSinStock>
  ) {}
  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id: number) {
    return await this.productoRepository.findOneBy({ id_producto: id });
  }
}
