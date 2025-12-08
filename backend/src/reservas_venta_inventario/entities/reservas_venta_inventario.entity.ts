import { Producto } from "src/productos/entities/producto.entity";
import { Cliente } from "src/clientes/entities/cliente.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity('reservas_venta_inventario', { schema: 'public' })
export class ReservasVentaInventario {
    @PrimaryGeneratedColumn({ name: 'id_reserva' })
    id: number;

    @Column({ type: 'int' })
    stock: number;

    @ManyToOne(() => Producto, (producto) => producto.reservas)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @ManyToOne(() => Cliente, (cliente) => cliente.reservas)
    @JoinColumn({ name: 'id_cliente' })
    cliente: Cliente;

    @CreateDateColumn({ name: 'fechareserva' })
    fechaReserva: Date;
}
