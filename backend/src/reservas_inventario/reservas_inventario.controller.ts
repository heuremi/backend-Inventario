import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservasInventarioService } from './reservas_inventario.service';
import { CreateReservasInventarioDto } from './dto/create-reservas_inventario.dto';
import { UpdateReservasInventarioDto } from './dto/update-reservas_inventario.dto';

@Controller('reservas-inventario')
export class ReservasInventarioController {
  constructor(private readonly reservasInventarioService: ReservasInventarioService) {}

  @Post()
  create(@Body() createReservasInventarioDto: CreateReservasInventarioDto) {
    return this.reservasInventarioService.create(createReservasInventarioDto);
  }

  @Get()
  findAll() {
    return this.reservasInventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservasInventarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservasInventarioDto: UpdateReservasInventarioDto) {
    return this.reservasInventarioService.update(+id, updateReservasInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservasInventarioService.remove(+id);
  }
}
