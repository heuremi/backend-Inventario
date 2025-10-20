import { Test, TestingModule } from '@nestjs/testing';
import { MovimientosInventarioService } from './movimientos_inventario.service';

describe('MovimientosInventarioService', () => {
  let service: MovimientosInventarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimientosInventarioService],
    }).compile();

    service = module.get<MovimientosInventarioService>(MovimientosInventarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
