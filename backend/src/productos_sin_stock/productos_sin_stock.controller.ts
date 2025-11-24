import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosSinStockService } from './productos_sin_stock.service';
import { CreateProductosSinStockDto } from './dto/create-productos_sin_stock.dto';
import { UpdateProductosSinStockDto } from './dto/update-productos_sin_stock.dto';

@Controller('productos-sin-stock')
export class ProductosSinStockController {
  constructor(private readonly productosSinStockService: ProductosSinStockService) {}

  @Post()
  create(@Body() createProductosSinStockDto: CreateProductosSinStockDto) {
    return this.productosSinStockService.create(createProductosSinStockDto);
  }

  @Get()
  findAll() {
    return this.productosSinStockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosSinStockService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductosSinStockDto: UpdateProductosSinStockDto) {
    return this.productosSinStockService.update(+id, updateProductosSinStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosSinStockService.remove(+id);
  }
}
