import { Producto } from "../../productos/entities/producto.entity";
import { Cliente } from "../../clientes/entities/cliente.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity('reservas_venta_inventario', { schema: 'public' })
export class ReservasVentaInventario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int' })
    stock: number;

    @ManyToOne(() => Producto, (producto) => producto.reservas)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @ManyToOne(() => Cliente, (cliente) => cliente.reservas)
    @JoinColumn({ name: 'id_cliente' })
    cliente: Cliente;

    @CreateDateColumn()
    fechaReserva: Date;
}
