import { PartialType } from '@nestjs/mapped-types';
import { CreateAjustesInventarioDto } from './create-ajustes_inventario.dto';

export class UpdateAjustesInventarioDto extends PartialType(CreateAjustesInventarioDto) {}
