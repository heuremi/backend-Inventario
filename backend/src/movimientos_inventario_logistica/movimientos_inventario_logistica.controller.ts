import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovimientosInventarioLogisticaService } from './movimientos_inventario_logistica.service';

@Controller('movimientos-inventario-logistica')
export class MovimientosInventarioLogisticaController {
  constructor(private readonly movimientosInventarioLogisticaService: MovimientosInventarioLogisticaService) {}

  @Get()
  findAll() {
    return this.movimientosInventarioLogisticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimientosInventarioLogisticaService.findOne(+id);
  }
}
