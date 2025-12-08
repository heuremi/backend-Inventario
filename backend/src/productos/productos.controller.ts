import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Empleado } from '../empleados/entities/empleado.entity';
import { AjustesInventarioService } from 'src/ajustes_inventario/ajustes_inventario.service';

@Controller('productos')
export class ProductosController {
  constructor(
    private readonly productoService: ProductosService,
    private readonly ajustesInventarioService: AjustesInventarioService,
  ) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    if (createProductoDto.user?.rol !== 'ADMIN_INVENTARIO' && createProductoDto.user?.rol !== 'JEFE_INVENTARIO' && createProductoDto.user?.rol !== 'ADMIN' && createProductoDto.user?.rol !== 'SUPER_ADMIN' && createProductoDto.user?.rol !== 'TESTING') {
      return { error: 'No tienes permisos para crear productos.' };
    }
    try {
      const producto = await this.productoService.create(createProductoDto);
      return producto;
    } catch (error) {
      return { error: 'Error al crear el producto' };
    }
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Patch(':id/stock')
  async updateStock(@Param('id') id: string, @Body() updateStockDto: { stock: number, observaciones: string, user: Empleado }) {
    if (updateStockDto.user.rol !== 'ADMIN_INVENTARIO' && updateStockDto.user.rol !== 'JEFE_INVENTARIO' && updateStockDto.user.rol !== 'ADMIN' && updateStockDto.user.rol !== 'TESTING') {
      return {
        error: 'No tienes permisos para modificar el stock de productos.'
      };
    }
    try {
      const resultado = await this.productoService.updateStock(+id, updateStockDto.stock);
      const res2 = await this.ajustesInventarioService.create({
        cantidad: updateStockDto.stock * -1,
        observaciones: updateStockDto.observaciones || 'Ajuste de stock manual',
        empleadoId: updateStockDto.user.id,
        productoId: +id
      })
      return {
        message: `Stock actualizado correctamente. Nuevo stock: ${resultado.stock}`,
        stockAnterior: resultado.stock + updateStockDto.stock,
        stockActual: resultado.stock
      };
    } catch (error) {
      if (error.name === 'stock_insuficiente') {
        return {
          error: 'No hay suficiente stock para completar la operación, contanctando a Compras.'
        };
      }
      return {
        message: 'Error al actualizar el stock',
      };
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
