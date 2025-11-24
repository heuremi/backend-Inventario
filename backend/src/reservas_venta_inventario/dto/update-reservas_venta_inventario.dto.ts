import { PartialType } from '@nestjs/mapped-types';
import { CreateReservasVentaInventarioDto } from './create-reservas_venta_inventario.dto';
import { IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class UpdateReservasVentaInventarioDto extends PartialType(CreateReservasVentaInventarioDto) {
    @IsOptional()
    @IsNumber()
    @Min(1)
    stock?: number;

    @IsOptional()
    @IsInt()
    productoId?: number;

    @IsOptional()
    @IsInt()
    clienteId?: number;
}