import { Producto } from "src/productos/entities/producto.entity";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity('reservas_inventario')
export class ReservaInventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  cantidad: number;

  @ManyToOne(() => Producto, (producto) => producto.reservas)
  @JoinColumn({ name: 'productoId' })
  producto: Producto;

  @ManyToOne(() => Cliente, (cliente) => cliente.reservas)
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;

  @CreateDateColumn()
  fechaReserva: Date;
}
