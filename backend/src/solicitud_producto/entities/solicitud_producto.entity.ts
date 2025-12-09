import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('solicitud_producto', { schema: 'public' })
export class SolicitudProducto {
  @PrimaryGeneratedColumn()
  id_solicitud: number;

  @Column({ type: 'text', nullable: true })
  nombre: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'boolean', default: false, nullable: true })
  estado_solicitud: boolean;

  @CreateDateColumn()
  fecha_solicitud: Date;
}