import { ReservasVentaInventario } from "../../reservas_inventario/entities/reservas_venta_inventario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cliente', { schema: 'public' })
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id_cliente' })
  id: number;

  @Column({ type: 'text', nullable: true })
  nombre: string;

  @Column({ type: 'text', nullable: true, default: '' })
  apellido: string;

  @Column({ type: 'text' })
  direccion: string;

  @Column({ type: 'text' })
  telefono: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @OneToMany(() => ReservasVentaInventario, (reserva) => reserva.cliente)
  reservas: ReservasVentaInventario[];

  /* @CreateDateColumn()
  fechaCreacion: Date;

  @UpdateDateColumn()
  fechaActualizacion: Date; */
}
