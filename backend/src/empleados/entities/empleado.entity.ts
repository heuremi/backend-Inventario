import { AjusteInventario } from "src/ajustes_inventario/entities/ajuste_inventario.entity";
import { MovimientoInventario } from "src/movimientos_inventario/entities/movimiento_inventario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('empleado', { schema: 'public' })
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', })
  nombre: string;

  @Column({ type: 'text', })
  apellido: string;

  @Column({ type: 'text', })
  rol: string;

  @Column({ type: 'text', })
  email: string;

  @Column({ type: 'text', nullable: true })
  telefono: string;

  @OneToMany(() => MovimientoInventario, (movimiento) => movimiento.empleado)
  movimientos: MovimientoInventario[];

  @OneToMany(() => AjusteInventario, (ajuste) => ajuste.empleado)
  ajustes: AjusteInventario[];

  @CreateDateColumn({ name: 'fecha_ingreso', type: 'timestamp without time zone' }) 
  fechaIngreso: Date;

  /* @UpdateDateColumn()
  fechaActualizacion: Date; */
}
