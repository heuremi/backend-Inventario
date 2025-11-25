import { Test, TestingModule } from '@nestjs/testing';
import { ReservasVentaInventarioController } from './reservas_venta_inventario.controller';
import { ReservasVentaInventarioService } from './reservas_venta_inventario.service';

describe('ReservasVentaInventarioController', () => {
  let controller: ReservasVentaInventarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservasVentaInventarioController],
      providers: [ReservasVentaInventarioService],
    }).compile();

    controller = module.get<ReservasVentaInventarioController>(ReservasVentaInventarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
