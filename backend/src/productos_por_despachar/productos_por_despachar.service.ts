import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductosPorDespachar } from './entities/productos_por_despachar.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ProductosPorDespacharService {
  constructor(
    @InjectRepository(ProductosPorDespachar)
    private readonly productosPorDespacharRepo: Repository<ProductosPorDespachar>
  ) {}

  findAll() {
    return this.productosPorDespacharRepo.find({ relations: ['producto'] });
  }

  async findOne(id: number) {
    const producto = await this.productosPorDespacharRepo.findOne({ where: { id }, relations: ['producto'] });
    if (!producto) throw new NotFoundException('Producto no encontrado');
    return producto;
  }
}
