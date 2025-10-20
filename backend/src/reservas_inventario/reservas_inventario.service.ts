import { Injectable } from '@nestjs/common';
import { CreateReservasInventarioDto } from './dto/create-reservas_inventario.dto';
import { UpdateReservasInventarioDto } from './dto/update-reservas_inventario.dto';

@Injectable()
export class ReservasInventarioService {
  create(createReservasInventarioDto: CreateReservasInventarioDto) {
    return 'This action adds a new reservasInventario';
  }

  findAll() {
    return `This action returns all reservasInventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservasInventario`;
  }

  update(id: number, updateReservasInventarioDto: UpdateReservasInventarioDto) {
    return `This action updates a #${id} reservasInventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservasInventario`;
  }
}
