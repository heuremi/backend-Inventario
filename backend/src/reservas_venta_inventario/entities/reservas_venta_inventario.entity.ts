import { Producto } from "../../productos/entities/producto.entity";
import { Cliente } from "../../clientes/entities/cliente.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity('reservas_venta_inventario')
export class ReservasVentaInventario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'numeric' })
    stock: number;

    @ManyToOne(() => Producto, (producto) => producto.reservas)
    @JoinColumn({ name: 'productoId' })
    producto: Producto;

    @ManyToOne(() => Cliente, (cliente) => cliente.reservas)
    @JoinColumn({ name: 'clienteId' })
    cliente: Cliente;

    @CreateDateColumn()
    fechaReserva: Date;
}
