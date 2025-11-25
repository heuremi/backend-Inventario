import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosSinStockService } from './productos_sin_stock.service';
import { ProductosSinStockController } from './productos_sin_stock.controller';
import { ProductosSinStock } from './entities/productos_sin_stock.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosSinStock])],
  controllers: [ProductosSinStockController],
  providers: [ProductosSinStockService],
  exports: [ProductosSinStockService],
})
export class ProductosSinStockModule {}
