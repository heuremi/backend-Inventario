import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Entity('movimientos_inventario')
export class MovimientoInventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  cantidad: number;

  @Column({ type: 'text' })
  tipo_movimiento: string;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @ManyToOne(() => Producto, (producto) => producto.movimientos)
  @JoinColumn({ name: 'productoId' })
  producto: Producto;

  @ManyToOne(() => Empleado, (empleado) => empleado.movimientos)
  @JoinColumn({ name: 'empleadoId' })
  empleado: Empleado;

  @CreateDateColumn()
  fechaMovimiento: Date;
}
