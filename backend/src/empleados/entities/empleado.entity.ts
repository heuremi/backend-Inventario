import { AjusteInventario } from "../../ajustes_inventario/entities/ajuste_inventario.entity";
import { MovimientoInventario } from "../../movimientos_inventario/entities/movimiento_inventario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('empleado', { schema: 'public' })
export class Empleado {
  @PrimaryGeneratedColumn({ name: 'id_empleado' })
  id: number;

  @Column({ type: 'text', default:'' })
  nombre: string;

  @Column({ type: 'text', default: ''})
  apellido: string;

  @Column({ type: 'text', default: ''})
  rol: string;

  @Column({ type: 'text', default: ''})
  email: string;

  @Column({ type: 'text', nullable: true })
  telefono: string;

  @OneToMany(() => MovimientoInventario, (movimiento) => movimiento.empleado)
  movimientos: MovimientoInventario[];

  @OneToMany(() => AjusteInventario, (ajuste) => ajuste.empleado)
  ajustes: AjusteInventario[];

  @Column({ name: 'fecha_ingreso', type: 'timestamp without time zone', default: () => 'CURRENT_DATE' }) 
  fechaIngreso: Date;

  /* @UpdateDateColumn()
  fechaActualizacion: Date; */
}
