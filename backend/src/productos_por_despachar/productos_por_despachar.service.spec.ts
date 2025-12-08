import { Test, TestingModule } from '@nestjs/testing';
import { ProductosPorDespacharService } from './productos_por_despachar.service';

describe('ProductosPorDespacharService', () => {
  let service: ProductosPorDespacharService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductosPorDespacharService],
    }).compile();

    service = module.get<ProductosPorDespacharService>(ProductosPorDespacharService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
