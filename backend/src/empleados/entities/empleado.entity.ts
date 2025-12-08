import { MovimientoInventarioLogistica } from "src/movimientos_inventario_logistica/entities/movimientos_inventario_logistica.entity";
import { AjusteInventario } from "../../ajustes_inventario/entities/ajuste_inventario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('empleado', { schema: 'public' })
export class Empleado {
  @PrimaryGeneratedColumn({ name: 'id_empleado' })
  id: number;

  @Column({type: 'text', default: ''})
  rut: string;

  @Column({ type: 'text', default: ''})
  nombre: string;

  @Column({ type: 'text', default: ''})
  apellido: string;

  @Column({ type: 'text', default: ''})
  rol: string;

  @Column({ type: 'text', default: ''})
  email: string;

  @Column({ type: 'text', nullable: true })
  telefono: string;

  @OneToMany(() => MovimientoInventarioLogistica, (movimiento) => movimiento.empleado)
  movimientos: MovimientoInventarioLogistica[];

  @OneToMany(() => AjusteInventario, (ajuste) => ajuste.empleado)
  ajustes: AjusteInventario[];

  @CreateDateColumn({ name: 'fecha_ingreso', type: 'timestamp without time zone' }) 
  fechaIngreso: Date;

  /* @UpdateDateColumn()
  fechaActualizacion: Date; */
}
