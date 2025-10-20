import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimientosInventarioDto } from './create-movimientos_inventario.dto';

export class UpdateMovimientosInventarioDto extends PartialType(CreateMovimientosInventarioDto) {}
