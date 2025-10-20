import { Injectable } from '@nestjs/common';
import { CreateAjustesInventarioDto } from './dto/create-ajustes_inventario.dto';
import { UpdateAjustesInventarioDto } from './dto/update-ajustes_inventario.dto';

@Injectable()
export class AjustesInventarioService {
  create(createAjustesInventarioDto: CreateAjustesInventarioDto) {
    return 'This action adds a new ajustesInventario';
  }

  findAll() {
    return `This action returns all ajustesInventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ajustesInventario`;
  }

  update(id: number, updateAjustesInventarioDto: UpdateAjustesInventarioDto) {
    return `This action updates a #${id} ajustesInventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} ajustesInventario`;
  }
}
