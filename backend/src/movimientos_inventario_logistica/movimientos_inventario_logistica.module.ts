import { Module } from '@nestjs/common';
import { MovimientosInventarioLogisticaService } from './movimientos_inventario_logistica.service';
import { MovimientosInventarioLogisticaController } from './movimientos_inventario_logistica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { MovimientoInventarioLogistica } from './entities/movimientos_inventario_logistica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoInventarioLogistica, Empleado, Producto])],
  controllers: [MovimientosInventarioLogisticaController],
  providers: [MovimientosInventarioLogisticaService],
  exports: [MovimientosInventarioLogisticaService],
})
export class MovimientosInventarioLogisticaModule {}
