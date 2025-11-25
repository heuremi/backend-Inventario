import { Test, TestingModule } from '@nestjs/testing';
import { ProductosSinStockService } from './productos_sin_stock.service';

describe('ProductosSinStockService', () => {
  let service: ProductosSinStockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductosSinStockService],
    }).compile();

    service = module.get<ProductosSinStockService>(ProductosSinStockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
