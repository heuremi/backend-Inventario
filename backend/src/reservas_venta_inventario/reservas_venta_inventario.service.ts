import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservasVentaInventarioDto } from './dto/create-reservas_venta_inventario.dto';
import { UpdateReservasVentaInventarioDto } from './dto/update-reservas_venta_inventario.dto';
import { ReservasVentaInventario } from './entities/reservas_venta_inventario.entity';
import { Repository } from 'typeorm/repository/Repository';
import { Producto } from 'src/productos/entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Cliente } from 'src/clientes/entities/cliente.entity';

@Injectable()
export class ReservasVentaInventarioService {
  constructor(
    @InjectRepository(ReservasVentaInventario)
    private readonly reservaRepo: Repository<ReservasVentaInventario>,
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

  async create(dto: CreateReservasVentaInventarioDto) {
    const producto = await this.productoRepo.findOne({ where: { id: dto.productoId } });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    const cliente = await this.clienteRepo.findOne({ where: { id: dto.clienteId } });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');

    const reserva = this.reservaRepo.create({
      fechaReserva: new Date(),
      stock: dto.stock,
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

  async update(id: number, dto: UpdateReservasVentaInventarioDto) {
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
      cantidad: dto.stock ?? reserva.stock,
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