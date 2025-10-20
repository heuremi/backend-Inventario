import { Injectable } from '@nestjs/common';
import { CreateMovimientosInventarioDto } from './dto/create-movimientos_inventario.dto';
import { UpdateMovimientosInventarioDto } from './dto/update-movimientos_inventario.dto';

@Injectable()
export class MovimientosInventarioService {
  create(createMovimientosInventarioDto: CreateMovimientosInventarioDto) {
    return 'This action adds a new movimientosInventario';
  }

  findAll() {
    return `This action returns all movimientosInventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movimientosInventario`;
  }

  update(id: number, updateMovimientosInventarioDto: UpdateMovimientosInventarioDto) {
    return `This action updates a #${id} movimientosInventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} movimientosInventario`;
  }
}
