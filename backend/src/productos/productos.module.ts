import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { Producto } from './entities/producto.entity';
import { SolicitudProducto } from './entities/solicitud_producto.entity';
import { AjustesInventarioModule } from '../ajustes_inventario/ajustes_inventario.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, SolicitudProducto]),
    AjustesInventarioModule,
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService],
})
export class ProductosModule {}
