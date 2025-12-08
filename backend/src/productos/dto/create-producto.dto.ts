import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, IsBoolean } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Empleado } from 'src/empleados/entities/empleado.entity';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsBoolean()
  @IsOptional()
  estado?: boolean = true;

  @IsOptional()
  user: Empleado | null;
}
