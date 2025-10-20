import { Test, TestingModule } from '@nestjs/testing';
import { AjustesInventarioController } from './ajustes_inventario.controller';
import { AjustesInventarioService } from './ajustes_inventario.service';

describe('AjustesInventarioController', () => {
  let controller: AjustesInventarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AjustesInventarioController],
      providers: [AjustesInventarioService],
    }).compile();

    controller = module.get<AjustesInventarioController>(AjustesInventarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
