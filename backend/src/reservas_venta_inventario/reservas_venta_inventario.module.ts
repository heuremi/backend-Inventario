import { Module } from '@nestjs/common';
import { ReservasVentaInventarioService } from './reservas_venta_inventario.service';
import { ReservasVentaInventarioController } from './reservas_venta_inventario.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Producto } from '../productos/entities/producto.entity';
import { Cliente } from '../clientes/entities/cliente.entity';
import { ReservasVentaInventario } from './entities/reservas_venta_inventario.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ReservasVentaInventario, Producto, Cliente])],
  controllers: [ReservasVentaInventarioController],
  providers: [ReservasVentaInventarioService],
  exports: [ReservasVentaInventarioService],
})
export class ReservasVentaInventarioModule {}
