import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Empleado } from 'src/empleados/entities/empleado.entity';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @Min(0)
  precio_unitario: number;

  @IsNumber()
  @Min(0)
  precio_venta: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  stock?: number = 0;

  @IsBoolean()
  @IsOptional()
  estado?: boolean = true;

  @IsOptional()
  user: Empleado | null;
}
