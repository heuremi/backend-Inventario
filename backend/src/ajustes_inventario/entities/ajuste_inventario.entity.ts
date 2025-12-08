import { Empleado } from "../../empleados/entities/empleado.entity";
import { Producto } from "../../productos/entities/producto.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ajustes_inventario')
export class AjusteInventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  cantidad: number;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @ManyToOne(() => Empleado, (empleado) => empleado.ajustes)
  empleado: Empleado;

  @ManyToOne(() => Producto, (producto) => producto.ajustes)
  producto: Producto;

  @CreateDateColumn()
  fechaAjuste: Date;
}
