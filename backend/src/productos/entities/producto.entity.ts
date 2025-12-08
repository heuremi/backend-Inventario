import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ReservasVentaInventario } from '../../reservas_venta_inventario/entities/reservas_venta_inventario.entity';
import { AjusteInventario } from '../../ajustes_inventario/entities/ajuste_inventario.entity';
import { MovimientoInventarioLogistica } from 'src/movimientos_inventario_logistica/entities/movimientos_inventario_logistica.entity';

@Entity('producto', { schema: 'public' })
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text', unique: true, nullable: true })
  codigo: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'numeric', nullable: true })
  precio_venta: number;

  @Column({ name: 'cantidad', type: 'numeric', default: 0, nullable: true })
  stock: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @OneToMany(() => MovimientoInventarioLogistica, (movimiento) => movimiento.producto)
  movimientos: MovimientoInventarioLogistica[];

  @OneToMany(() => ReservasVentaInventario, (reserva) => reserva.producto)
  reservas: ReservasVentaInventario[];

  @OneToMany(() => AjusteInventario, (ajuste) => ajuste.producto)
  ajustes: AjusteInventario[];
}
