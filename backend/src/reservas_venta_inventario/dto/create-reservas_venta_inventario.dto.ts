import { IsInt, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateReservasVentaInventarioDto {
    @IsNumber()
    @Min(1)
    stock: number;

    @IsInt()
    @IsNotEmpty()
    productoId: number;

    @IsInt()
    @IsNotEmpty()
    clienteId: number;
}
