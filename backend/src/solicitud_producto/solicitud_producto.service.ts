import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolicitudProductoDto } from './dto/create_solicitud_producto.dto';
import { UpdateSolicitudProductoDto } from './dto/update_solicitud_producto.dto';
import { SolicitudProducto } from './entities/solicitud_producto.entity';

@Injectable()
export class SolicitudProductoService {
  constructor(
    @InjectRepository(SolicitudProducto)
    private readonly solicitudProductoRepository: Repository<SolicitudProducto>,
  ) {}

  create(createSolicitudProductoDto: CreateSolicitudProductoDto) {
    const solicitud = this.solicitudProductoRepository.create(createSolicitudProductoDto);
    return this.solicitudProductoRepository.save(solicitud);
  }

  findAll() {
    return this.solicitudProductoRepository.find();
  }

  findOne(id: number) {
    return this.solicitudProductoRepository.findOneBy({ id_solicitud: id });
  }

  async update(id: number, updateSolicitudProductoDto: UpdateSolicitudProductoDto) {
    await this.solicitudProductoRepository.update(id, updateSolicitudProductoDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.solicitudProductoRepository.delete(id);
  }
}
