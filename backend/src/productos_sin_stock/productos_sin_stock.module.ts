import { Module } from '@nestjs/common';
import { ProductosSinStockService } from './productos_sin_stock.service';
import { ProductosSinStockController } from './productos_sin_stock.controller';

@Module({
  controllers: [ProductosSinStockController],
  providers: [ProductosSinStockService],
})
export class ProductosSinStockModule {}
