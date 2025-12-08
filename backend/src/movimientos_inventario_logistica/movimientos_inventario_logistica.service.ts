import { Injectable, NotFoundException } from '@nestjs/common';
import { MovimientoInventarioLogistica } from './entities/movimientos_inventario_logistica.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovimientosInventarioLogisticaService {
  constructor(
    @InjectRepository(MovimientoInventarioLogistica)
    private readonly movRepo: Repository<MovimientoInventarioLogistica>
  ) {}
  findAll() {
    return this.movRepo.find({ relations: ['empleado', 'producto'] });
  }

  async findOne(id: number) {
    const mov = await this.movRepo.findOne({ where: { id }, relations: ['empleado', 'producto'] });
    if (!mov) throw new NotFoundException('Movimiento no encontrado');
    return mov;
  }
}
