import { Test, TestingModule } from '@nestjs/testing';
import { ReservasInventarioController } from './reservas_inventario.controller';
import { ReservasInventarioService } from './reservas_inventario.service';

describe('ReservasInventarioController', () => {
  let controller: ReservasInventarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservasInventarioController],
      providers: [ReservasInventarioService],
    }).compile();

    controller = module.get<ReservasInventarioController>(ReservasInventarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
