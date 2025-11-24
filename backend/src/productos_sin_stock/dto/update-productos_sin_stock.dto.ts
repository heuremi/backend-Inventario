import { PartialType } from '@nestjs/mapped-types';
import { CreateProductosSinStockDto } from './create-productos_sin_stock.dto';

export class UpdateProductosSinStockDto extends PartialType(CreateProductosSinStockDto) {}
