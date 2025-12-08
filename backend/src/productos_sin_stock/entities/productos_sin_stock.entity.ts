import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, CreateDateColumn, Index } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('productos_sin_stock', {schema: 'public'})
export class ProductosSinStock {
	@PrimaryColumn({ name: 'id_producto', type: 'int' })
	id_producto: number;

	@OneToOne(() => Producto)
	@JoinColumn({ name: 'id_producto' })
	producto: Producto;

	@Column({ type: 'text' })
	nombre: string;

	@Column({ type: 'text', nullable: true })
	descripcion: string;
	
	@Column({ type: 'text', nullable: true })
	codigo: string;

	@Column({ type: 'double precision', name: 'precio_venta', nullable: true })
	precio_venta: number;

	@CreateDateColumn({ name: 'fecha_sin_stock' })
	fecha_sin_stock: Date;
}
