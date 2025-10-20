import { Module } from '@nestjs/common';
import { MovimientosInventarioService } from './movimientos_inventario.service';
import { MovimientosInventarioController } from './movimientos_inventario.controller';
import { MovimientoInventario } from './entities/movimiento_inventario.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoInventario])],
  controllers: [MovimientosInventarioController],
  providers: [MovimientosInventarioService],
  exports: [MovimientosInventarioService],
})
export class MovimientosInventarioModule {}
