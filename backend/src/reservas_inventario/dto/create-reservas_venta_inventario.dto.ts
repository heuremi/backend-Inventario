import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateReservasVentaInventarioDto {
	@IsNumber()
	@Min(0.0000001)
	stock: number;

	@IsInt()
	@IsNotEmpty()
	productoId: number;

	@IsInt()
	@IsNotEmpty()
	clienteId: number;
}
