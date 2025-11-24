import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, CreateDateColumn, Index } from 'typeorm';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('productos_sin_stock')
export class ProductosSinStock {
	// Usamos el id del producto como clave primaria porque cada producto
	// puede aparecer como "sin stock" a lo sumo una vez en esta tabla
	@PrimaryColumn({ name: 'id_producto', type: 'int' })
	@Index({ unique: true })
	id_producto: number;

	// Relación con la entidad Producto (opcional a nivel de uso)
	@OneToOne(() => Producto)
	@JoinColumn({ name: 'id_producto' })
	producto: Producto;

	@Column({ type: 'text' })
	nombre: string;

	@Column({ type: 'text', nullable: true })
	descripcion: string;

	// Precio unitario tomado de productos
	@Column({ type: 'double precision', name: 'precio_unitario', nullable: true })
	precio_unitario: number;

	@Column({ type: 'text', nullable: true })
	codigo: string;

	// Precio de venta que puede venir del producto (float)
	@Column({ type: 'double precision', name: 'precio_venta', nullable: true })
	precio_venta: number;

	// Fecha en que fue marcado como sin stock (se llenará por trigger o al insertar)
	@CreateDateColumn({ name: 'fecha_sin_stock' })
	fecha_sin_stock: Date;
}
