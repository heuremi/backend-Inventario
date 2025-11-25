import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservasVentaInventarioService } from './reservas_venta_inventario.service';
import { CreateReservasVentaInventarioDto } from './dto/create-reservas_venta_inventario.dto';
import { UpdateReservasVentaInventarioDto } from './dto/update-reservas_venta_inventario.dto';

@Controller('reservas-venta-inventario')
export class ReservasVentaInventarioController {
  constructor(private readonly reservasVentaInventarioService: ReservasVentaInventarioService) {}

  @Post()
  create(@Body() createReservasVentaInventarioDto: CreateReservasVentaInventarioDto) {
    return this.reservasVentaInventarioService.create(createReservasVentaInventarioDto);
  }

  @Get()
  findAll() {
    return this.reservasVentaInventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservasVentaInventarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservasVentaInventarioDto: UpdateReservasVentaInventarioDto) {
    return this.reservasVentaInventarioService.update(+id, updateReservasVentaInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservasVentaInventarioService.remove(+id);
  }
}
