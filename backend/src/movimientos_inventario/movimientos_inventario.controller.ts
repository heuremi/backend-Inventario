import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimientosInventarioService } from './movimientos_inventario.service';
import { CreateMovimientosInventarioDto } from './dto/create-movimientos_inventario.dto';
import { UpdateMovimientosInventarioDto } from './dto/update-movimientos_inventario.dto';

@Controller('movimientos-inventario')
export class MovimientosInventarioController {
  constructor(private readonly movimientosInventarioService: MovimientosInventarioService) {}

  @Post()
  create(@Body() createMovimientosInventarioDto: CreateMovimientosInventarioDto) {
    return this.create(createMovimientosInventarioDto);
  }

  @Get()
  findAll() {
    return this.movimientosInventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimientosInventarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovimientosInventarioDto: UpdateMovimientosInventarioDto) {
    return this.movimientosInventarioService.update(+id, updateMovimientosInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimientosInventarioService.remove(+id);
  }
}
