import { Injectable } from '@nestjs/common';
import { CreateProductosSinStockDto } from './dto/create-productos_sin_stock.dto';
import { UpdateProductosSinStockDto } from './dto/update-productos_sin_stock.dto';

@Injectable()
export class ProductosSinStockService {
  create(createProductosSinStockDto: CreateProductosSinStockDto) {
    return 'This action adds a new productosSinStock';
  }

  findAll() {
    return `This action returns all productosSinStock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productosSinStock`;
  }

  update(id: number, updateProductosSinStockDto: UpdateProductosSinStockDto) {
    return `This action updates a #${id} productosSinStock`;
  }

  remove(id: number) {
    return `This action removes a #${id} productosSinStock`;
  }
}
