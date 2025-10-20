import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productoService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    try {
      const producto = await this.productoService.create(createProductoDto);
      return producto;
    } catch (error) {
      return { error: 'Error al crear el producto' };
    }
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Patch(':id/stock')
  updateStock(@Param('id') id: string, @Body() updateStockDto: { stock: number }) {
    return this.productoService.updateStock(+id, updateStockDto.stock);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
