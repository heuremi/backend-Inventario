import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateReservasInventarioDto {
	@IsNumber()
	@Min(0.0000001)
	cantidad: number;

	@IsInt()
	@IsNotEmpty()
	productoId: number;

	@IsInt()
	@IsNotEmpty()
	clienteId: number;
}
