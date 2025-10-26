import { ReservaInventario } from "../../reservas_inventario/entities/reserva_inventario.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('cliente', { schema: 'public' })
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id_cliente' })
  id: number;

  @Column({ type: 'text', nullable: true })
  nombre: string;

  @Column({ type: 'text' })
  apellido: string;

  @Column({ type: 'text' })
  direccion: string;

  @Column({ type: 'text' })
  telefono: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @OneToMany(() => ReservaInventario, (reserva) => reserva.cliente)
  reservas: ReservaInventario[];

  /* @CreateDateColumn()
  fechaCreacion: Date;

  @UpdateDateColumn()
  fechaActualizacion: Date; */
}
