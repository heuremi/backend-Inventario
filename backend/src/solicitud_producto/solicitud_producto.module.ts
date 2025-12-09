import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitudProductoService } from './solicitud_producto.service';
import { SolicitudProductoController } from './solicitud_producto.controller';
import { SolicitudProducto } from './entities/solicitud_producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitudProducto])],
  controllers: [SolicitudProductoController],
  providers: [SolicitudProductoService],
})
export class SolicitudProductoModule {}
