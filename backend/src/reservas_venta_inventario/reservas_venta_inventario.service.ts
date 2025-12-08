import { Injectable, NotFoundException } from '@nestjs/common';
import { ReservasVentaInventario } from './entities/reservas_venta_inventario.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';

@Injectable()
export class ReservasVentaInventarioService {
  constructor(
    @InjectRepository(ReservasVentaInventario)
    private readonly reservaRepo: Repository<ReservasVentaInventario>
  ) {}

  findAll() {
    return this.reservaRepo.find({ relations: ['producto', 'cliente'] });
  }

  async findOne(id: number) {
    const reserva = await this.reservaRepo.findOne({ where: { id }, relations: ['producto', 'cliente'] });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }
}