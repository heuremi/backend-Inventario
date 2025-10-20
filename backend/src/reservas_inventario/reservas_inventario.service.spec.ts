import { Test, TestingModule } from '@nestjs/testing';
import { ReservasInventarioService } from './reservas_inventario.service';

describe('ReservasInventarioService', () => {
  let service: ReservasInventarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservasInventarioService],
    }).compile();

    service = module.get<ReservasInventarioService>(ReservasInventarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
