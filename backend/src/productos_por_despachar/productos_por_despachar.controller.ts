import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductosPorDespacharService } from './productos_por_despachar.service';

@Controller('productos-por-despachar')
export class ProductosPorDespacharController {
  constructor(private readonly productosPorDespacharService: ProductosPorDespacharService) {}

  @Get()
  findAll() {
    return this.productosPorDespacharService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosPorDespacharService.findOne(+id);
  }
}
