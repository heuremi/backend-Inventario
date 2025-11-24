import { Test, TestingModule } from '@nestjs/testing';
import { ProductosSinStockController } from './productos_sin_stock.controller';
import { ProductosSinStockService } from './productos_sin_stock.service';

describe('ProductosSinStockController', () => {
  let controller: ProductosSinStockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductosSinStockController],
      providers: [ProductosSinStockService],
    }).compile();

    controller = module.get<ProductosSinStockController>(ProductosSinStockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
