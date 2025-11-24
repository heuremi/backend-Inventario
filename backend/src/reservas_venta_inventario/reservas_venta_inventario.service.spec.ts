import { Test, TestingModule } from '@nestjs/testing';
import { ReservasVentaInventarioService } from './reservas_venta_inventario.service';

describe('ReservasVentaInventarioService', () => {
  let service: ReservasVentaInventarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservasVentaInventarioService],
    }).compile();

    service = module.get<ReservasVentaInventarioService>(ReservasVentaInventarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
