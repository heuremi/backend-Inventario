import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';
import { Empleado } from '../../empleados/entities/empleado.entity';

@Entity('movimientos_inventario_logistica', { schema: 'public' })
export class MovimientoInventarioLogistica {
    @PrimaryGeneratedColumn({ name: 'id'})
    id: number;

    @Column({ type: 'int' })
    cantidad: number;

    @Column({ type: 'boolean' })
    es_recepcion: boolean;

    @Column({ type: 'int' })
    id_referencia: number;

    @ManyToOne(() => Producto, (producto) => producto.movimientos)
    @JoinColumn({ name: 'id_producto' })
    producto: Producto;

    @ManyToOne(() => Empleado, (empleado) => empleado.movimientos)
    @JoinColumn({ name: 'id_empleado' })
    empleado: Empleado;

    @CreateDateColumn()
    fecha_movimiento: Date;
}
