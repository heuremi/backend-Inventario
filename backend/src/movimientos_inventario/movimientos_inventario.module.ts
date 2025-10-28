import { Module } from '@nestjs/common';
import { MovimientosInventarioService } from './movimientos_inventario.service';
import { MovimientosInventarioController } from './movimientos_inventario.controller';
import { MovimientoInventario } from './entities/movimiento_inventario.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Empleado } from '../empleados/entities/empleado.entity';
import { Producto } from '../productos/entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoInventario, Empleado, Producto])],
  controllers: [MovimientosInventarioController],
  providers: [MovimientosInventarioService],
  exports: [MovimientosInventarioService],
})
export class MovimientosInventarioModule {}
