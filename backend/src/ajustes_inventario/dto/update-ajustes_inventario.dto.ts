import { PartialType } from '@nestjs/mapped-types';
import { CreateAjustesInventarioDto } from './create-ajustes_inventario.dto';
import { IsInt, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdateAjustesInventarioDto extends PartialType(CreateAjustesInventarioDto) {
	@IsOptional()
	@IsNumber()
	@Min(0.0000001)
	stock?: number;

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
