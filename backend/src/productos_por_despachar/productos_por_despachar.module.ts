import { Module } from '@nestjs/common';
import { ProductosPorDespacharService } from './productos_por_despachar.service';
import { ProductosPorDespacharController } from './productos_por_despachar.controller';
import { Producto } from 'src/productos/entities/producto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosPorDespachar } from './entities/productos_por_despachar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosPorDespachar, Producto])],
  controllers: [ProductosPorDespacharController],
  providers: [ProductosPorDespacharService],
})
export class ProductosPorDespacharModule {}
