import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { MovimientoInventario } from '../../movimientos_inventario/entities/movimiento_inventario.entity';
import { ReservasVentaInventario } from '../../reservas_venta_inventario/entities/reservas_venta_inventario.entity';
import { AjusteInventario } from '../../ajustes_inventario/entities/ajuste_inventario.entity';

@Entity('producto', {schema: 'public'})
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text', unique: true, nullable: false })
  codigo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'numeric' })
  precio_unitario: number;

  @Column({ type: 'numeric' })
  precio_venta: number;

  @Column({ type: 'numeric', default: 0 })
  cantidad: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @OneToMany(() => MovimientoInventario, (movimiento) => movimiento.producto)
  movimientos: MovimientoInventario[];

  @OneToMany(() => ReservasVentaInventario, (reserva) => reserva.producto)
  reservas: ReservasVentaInventario[];

  @OneToMany(() => AjusteInventario, (ajuste) => ajuste.producto)
  ajustes: AjusteInventario[];
}
