import { Test, TestingModule } from '@nestjs/testing';
import { MovimientosInventarioLogisticaController } from './movimientos_inventario_logistica.controller';
import { MovimientosInventarioLogisticaService } from './movimientos_inventario_logistica.service';

describe('MovimientosInventarioLogisticaController', () => {
  let controller: MovimientosInventarioLogisticaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimientosInventarioLogisticaController],
      providers: [MovimientosInventarioLogisticaService],
    }).compile();

    controller = module.get<MovimientosInventarioLogisticaController>(MovimientosInventarioLogisticaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
