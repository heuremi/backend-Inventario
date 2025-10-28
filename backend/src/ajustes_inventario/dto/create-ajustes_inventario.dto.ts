import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateAjustesInventarioDto {
	@IsNumber()
	@Min(0.0000001)
	cantidad: number;

	@IsOptional()
	@IsString()
	observaciones?: string;

	@IsInt()
	@IsNotEmpty()
	empleadoId: number;

	@IsInt()
	@IsNotEmpty()
	productoId: number;
}
