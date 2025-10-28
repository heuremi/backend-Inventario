import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimientosInventarioDto } from './create-movimientos_inventario.dto';
import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateMovimientosInventarioDto extends PartialType(CreateMovimientosInventarioDto) {
	@IsOptional()
	@IsNumber()
	@Min(0.0000001)
	cantidad?: number;

	@IsOptional()
	@IsString()
	tipo_movimiento?: string;

	@IsOptional()
	@IsString()
	observaciones?: string;

	@IsOptional()
	@IsInt()
	empleadoId?: number;

	@IsOptional()
	@IsInt()
	productoId?: number;
}
