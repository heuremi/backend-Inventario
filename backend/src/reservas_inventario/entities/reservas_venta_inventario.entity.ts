import { Producto } from "../../productos/entities/producto.entity";
import { Cliente } from "../../clientes/entities/cliente.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity('reservas_venta_inventario', { schema: 'public' })
export class ReservasVentaInventario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'numeric' })
  ventaId: number;

  @Column({ type: 'numeric' })
  stock: number;

  @ManyToOne(() => Producto, (producto) => producto.reservas)
  @JoinColumn({ name: 'productoId' })
  producto: Producto;

  @CreateDateColumn()
  fechaReserva: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.reservas)
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;
}
