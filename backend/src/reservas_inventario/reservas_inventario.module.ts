import { Module } from '@nestjs/common';
import { ReservasInventarioService } from './reservas_inventario.service';
import { ReservasInventarioController } from './reservas_inventario.controller';
import { ReservaInventario } from './entities/reserva_inventario.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReservaInventario])],
  controllers: [ReservasInventarioController],
  providers: [ReservasInventarioService],
  exports: [ReservasInventarioService],
})
export class ReservasInventarioModule {}
