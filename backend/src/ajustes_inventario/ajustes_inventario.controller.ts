import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AjustesInventarioService } from './ajustes_inventario.service';
import { CreateAjustesInventarioDto } from './dto/create-ajustes_inventario.dto';
import { UpdateAjustesInventarioDto } from './dto/update-ajustes_inventario.dto';

@Controller('ajustes-inventario')
export class AjustesInventarioController {
  constructor(private readonly ajustesInventarioService: AjustesInventarioService) {}

  @Post()
  create(@Body() createAjustesInventarioDto: CreateAjustesInventarioDto) {
    return this.ajustesInventarioService.create(createAjustesInventarioDto);
  }

  @Get()
  findAll() {
    return this.ajustesInventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ajustesInventarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAjustesInventarioDto: UpdateAjustesInventarioDto) {
    return this.ajustesInventarioService.update(+id, updateAjustesInventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ajustesInventarioService.remove(+id);
  }
}
