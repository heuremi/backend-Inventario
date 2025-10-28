import { PartialType } from '@nestjs/mapped-types';
import { CreateReservasInventarioDto } from './create-reservas_inventario.dto';
import { IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateReservasInventarioDto extends PartialType(CreateReservasInventarioDto) {
	@IsOptional()
	@IsNumber()
	@Min(0.0000001)
	cantidad?: number;

	@IsOptional()
	@IsInt()
	productoId?: number;

	@IsOptional()
	@IsInt()
	clienteId?: number;
}
