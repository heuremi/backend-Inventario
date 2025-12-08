import { Test, TestingModule } from '@nestjs/testing';
import { MovimientosInventarioLogisticaService } from './movimientos_inventario_logistica.service';

describe('MovimientosInventarioLogisticaService', () => {
  let service: MovimientosInventarioLogisticaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimientosInventarioLogisticaService],
    }).compile();

    service = module.get<MovimientosInventarioLogisticaService>(MovimientosInventarioLogisticaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
