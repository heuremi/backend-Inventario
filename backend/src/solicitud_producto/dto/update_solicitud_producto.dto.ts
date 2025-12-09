import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitudProductoDto } from './create_solicitud_producto.dto';

export class UpdateSolicitudProductoDto extends PartialType(CreateSolicitudProductoDto) {}
