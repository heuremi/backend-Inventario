import { Test, TestingModule } from '@nestjs/testing';
import { AjustesInventarioService } from './ajustes_inventario.service';

describe('AjustesInventarioService', () => {
  let service: AjustesInventarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AjustesInventarioService],
    }).compile();

    service = module.get<AjustesInventarioService>(AjustesInventarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
