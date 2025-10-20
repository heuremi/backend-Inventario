import { PartialType } from '@nestjs/mapped-types';
import { CreateReservasInventarioDto } from './create-reservas_inventario.dto';

export class UpdateReservasInventarioDto extends PartialType(CreateReservasInventarioDto) {}
