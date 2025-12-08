import { Test, TestingModule } from '@nestjs/testing';
import { ProductosPorDespacharController } from './productos_por_despachar.controller';
import { ProductosPorDespacharService } from './productos_por_despachar.service';

describe('ProductosPorDespacharController', () => {
  let controller: ProductosPorDespacharController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductosPorDespacharController],
      providers: [ProductosPorDespacharService],
    }).compile();

    controller = module.get<ProductosPorDespacharController>(ProductosPorDespacharController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
