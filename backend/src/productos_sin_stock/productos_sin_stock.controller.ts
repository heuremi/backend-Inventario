import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosSinStockService } from './productos_sin_stock.service';

@Controller('productos-sin-stock')
export class ProductosSinStockController {
  constructor(private readonly productosSinStockService: ProductosSinStockService) {}

  @Get()
  findAll() {
    return this.productosSinStockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosSinStockService.findOne(+id);
  }
}
