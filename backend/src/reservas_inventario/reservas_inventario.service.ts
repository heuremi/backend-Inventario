import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservasInventarioDto } from './dto/create-reservas_inventario.dto';
import { UpdateReservasInventarioDto } from './dto/update-reservas_inventario.dto';
import { ReservaInventario } from './entities/reserva_inventario.entity';
import { Producto } from '../productos/entities/producto.entity';
import { Cliente } from '../clientes/entities/cliente.entity';

@Injectable()
export class ReservasInventarioService {
  constructor(
    @InjectRepository(ReservaInventario)
    private readonly reservaRepo: Repository<ReservaInventario>,
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

  async create(dto: CreateReservasInventarioDto) {
    const producto = await this.productoRepo.findOne({ where: { id: dto.productoId } });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    const cliente = await this.clienteRepo.findOne({ where: { id: dto.clienteId } });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');

    const reserva = this.reservaRepo.create({
      cantidad: dto.cantidad,
      producto,
      cliente,
    });
    return this.reservaRepo.save(reserva);
  }

  findAll() {
    return this.reservaRepo.find({ relations: ['producto', 'cliente'] });
  }

  async findOne(id: number) {
    const reserva = await this.reservaRepo.findOne({ where: { id }, relations: ['producto', 'cliente'] });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }

  async update(id: number, dto: UpdateReservasInventarioDto) {
    const reserva = await this.reservaRepo.findOne({ where: { id } });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');

    if (dto.productoId !== undefined) {
      const producto = await this.productoRepo.findOne({ where: { id: dto.productoId } });
      if (!producto) throw new NotFoundException('Producto no encontrado');
      (reserva as any).producto = producto;
    }
    if (dto.clienteId !== undefined) {
      const cliente = await this.clienteRepo.findOne({ where: { id: dto.clienteId } });
      if (!cliente) throw new NotFoundException('Cliente no encontrado');
      (reserva as any).cliente = cliente;
    }

    Object.assign(reserva, {
      cantidad: dto.cantidad ?? reserva.cantidad,
    });

    await this.reservaRepo.save(reserva);
    return this.findOne(id);
  }

  async remove(id: number) {
    const res = await this.reservaRepo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Reserva no encontrada');
    return { deleted: true };
  }
}
