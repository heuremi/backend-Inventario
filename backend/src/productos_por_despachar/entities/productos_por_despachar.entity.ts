import { Producto } from "../../productos/entities/producto.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity('productos_por_despachar', { schema: 'public' })
export class ProductosPorDespachar {
    @PrimaryGeneratedColumn({ name: 'id_registro' })
    id: number;

    @ManyToOne(() => Producto, (producto) => producto.reservas)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @Column({ type: 'int' })
    cantidad_por_despachar: number;

    @CreateDateColumn({ name: 'fecha_registro' })
    fecha_registro: Date;
}