import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { MovimientoInventario } from '../../movimientos_inventario/entities/movimiento_inventario.entity';
import { ReservaInventario } from 'src/reservas_inventario/entities/reserva_inventario.entity';
import { AjusteInventario } from 'src/ajustes_inventario/entities/ajuste_inventario.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'numeric' })
  precio: number;

  @Column({ type: 'numeric', default: 0 })
  cantidad: number;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @OneToMany(() => MovimientoInventario, (movimiento) => movimiento.producto)
  movimientos: MovimientoInventario[];

  @OneToMany(() => ReservaInventario, (reserva) => reserva.producto)
  reservas: ReservaInventario[];

  @OneToMany(() => AjusteInventario, (ajuste) => ajuste.producto)
  ajustes: AjusteInventario[];

  @CreateDateColumn()
  fechaCreacion: Date;

  @UpdateDateColumn()
  fechaActualizacion: Date;
}
