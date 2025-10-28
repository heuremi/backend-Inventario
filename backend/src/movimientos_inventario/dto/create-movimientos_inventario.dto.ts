import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateMovimientosInventarioDto {
	@IsNumber()
	@Min(0.0000001)
	cantidad: number;

	@IsString()
	@IsNotEmpty()
	tipo_movimiento: string; // e.g., 'ingreso' | 'egreso'

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
