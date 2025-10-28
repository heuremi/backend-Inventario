import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovimientosInventarioDto } from './dto/create-movimientos_inventario.dto';
import { UpdateMovimientosInventarioDto } from './dto/update-movimientos_inventario.dto';
import { MovimientoInventario } from './entities/movimiento_inventario.entity';
import { Empleado } from '../empleados/entities/empleado.entity';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class MovimientosInventarioService {
  constructor(
    @InjectRepository(MovimientoInventario)
    private readonly movRepo: Repository<MovimientoInventario>,
    @InjectRepository(Empleado)
    private readonly empleadoRepo: Repository<Empleado>,
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  async create(dto: CreateMovimientosInventarioDto) {
    const empleado = await this.empleadoRepo.findOne({ where: { id: dto.empleadoId } });
    if (!empleado) throw new NotFoundException('Empleado no encontrado');

    const producto = await this.productoRepo.findOne({ where: { id: dto.productoId } });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    const mov = this.movRepo.create({
      cantidad: dto.cantidad,
      tipo_movimiento: dto.tipo_movimiento,
      observaciones: dto.observaciones,
      empleado,
      producto,
    });
    return this.movRepo.save(mov);
  }

  findAll() {
    return this.movRepo.find({ relations: ['empleado', 'producto'] });
  }

  async findOne(id: number) {
    const mov = await this.movRepo.findOne({ where: { id }, relations: ['empleado', 'producto'] });
    if (!mov) throw new NotFoundException('Movimiento no encontrado');
    return mov;
  }

  async update(id: number, dto: UpdateMovimientosInventarioDto) {
    const mov = await this.movRepo.findOne({ where: { id } });
    if (!mov) throw new NotFoundException('Movimiento no encontrado');

    if (dto.empleadoId !== undefined) {
      const empleado = await this.empleadoRepo.findOne({ where: { id: dto.empleadoId } });
      if (!empleado) throw new NotFoundException('Empleado no encontrado');
      (mov as any).empleado = empleado;
    }
    if (dto.productoId !== undefined) {
      const producto = await this.productoRepo.findOne({ where: { id: dto.productoId } });
      if (!producto) throw new NotFoundException('Producto no encontrado');
      (mov as any).producto = producto;
    }

    Object.assign(mov, {
      cantidad: dto.cantidad ?? mov.cantidad,
      tipo_movimiento: dto.tipo_movimiento ?? mov.tipo_movimiento,
      observaciones: dto.observaciones ?? mov.observaciones,
    });

    await this.movRepo.save(mov);
    return this.findOne(id);
  }

  async remove(id: number) {
    const res = await this.movRepo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Movimiento no encontrado');
    return { deleted: true };
  }
}
