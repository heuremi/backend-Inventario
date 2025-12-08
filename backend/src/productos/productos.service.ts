import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { SolicitudProducto } from './entities/solicitud_producto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
    @InjectRepository(SolicitudProducto)
    private readonly solicitudProductoRepository: Repository<SolicitudProducto>,
  ) {}
  
  async create(createProductoDto: CreateProductoDto) {
    try {
      const solicitud = this.solicitudProductoRepository.create({
        nombre: createProductoDto.nombre,
        descripcion: createProductoDto.descripcion,
        estado_solicitud: createProductoDto.estado,
      });
      return await this.solicitudProductoRepository.save(solicitud);
    } catch (error) {
      console.error('Error al crear solicitud de producto:', error);
      throw error;
    }
  }

  async findAll() {
    return await this.productoRepository.find();
  }

  async findOne(id: number) {
    try {
      const producto = await this.productoRepository.findOne({ where: { id } });
      if (!producto) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }
      return producto;
    } catch (error) {
      console.error(`Error buscando producto ${id}:`, error);
      throw error;
    }
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    return await this.productoRepository.update(id, updateProductoDto);
  }

  async updateStock(id: number, stock: number) {
    try {
      const producto = await this.productoRepository.findOne({ where: { id } });
      
      if (!producto) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }

      const nuevoStock = producto.stock - stock;

      if (nuevoStock < 0) {
        const error = new Error(`Stock insuficiente. Stock actual: ${producto.stock}, stock solicitado: ${stock}, faltante: ${Math.abs(nuevoStock)}`);
        error.name = 'stock_insuficiente';
        throw error;
      }

      producto.stock = nuevoStock;

      if (producto.stock <= 0) {
        producto.estado = false;
      }

      const productoActualizado = await this.productoRepository.save(producto);
      return productoActualizado;
      
    } catch (error) {
      console.error(`Tipo de error: ${error.name}`);
      console.error(`Mensaje: ${error.message}`);
      
      throw error;
    }
  }

  async remove(id: number) {
    return await this.productoRepository.delete(id);
  }
}
