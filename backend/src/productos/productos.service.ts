import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>
  ) {}
  
  async create(createProductoDto: CreateProductoDto) {
    try {
      const producto = this.productoRepository.create(createProductoDto);
      return await this.productoRepository.save(producto);
    } catch (error) {
      console.error('Error al crear producto:', error);
      throw error;
    }
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id: number) {
    return await this.productoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.productoRepository.update(id, updateProductoDto);
  }

  async remove(id: number) {
    return await this.productoRepository.delete(id);
  }
}
