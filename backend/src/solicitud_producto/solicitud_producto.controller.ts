import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitudProductoService } from './solicitud_producto.service';
import { CreateSolicitudProductoDto } from './dto/create_solicitud_producto.dto';
import { UpdateSolicitudProductoDto } from './dto/update_solicitud_producto.dto';

@Controller('solicitud-producto')
export class SolicitudProductoController {
  constructor(private readonly solicitudProductoService: SolicitudProductoService) {}

  @Post()
  create(@Body() createSolicitudProductoDto: CreateSolicitudProductoDto) {
    return this.solicitudProductoService.create(createSolicitudProductoDto);
  }

  @Get()
  findAll() {
    return this.solicitudProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitudProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitudProductoDto: UpdateSolicitudProductoDto) {
    return this.solicitudProductoService.update(+id, updateSolicitudProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitudProductoService.remove(+id);
  }
}
