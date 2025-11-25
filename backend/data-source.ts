import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
import { Empleado } from './src/empleados/entities/empleado.entity'; 
import { Cliente } from './src/clientes/entities/cliente.entity'; 
import { AjusteInventario } from './src/ajustes_inventario/entities/ajuste_inventario.entity';
import { MovimientoInventario } from './src/movimientos_inventario/entities/movimiento_inventario.entity';
import { Producto } from './src/productos/entities/producto.entity';
import { ReservasVentaInventario } from './src/reservas_venta_inventario/entities/reservas_venta_inventario.entity';
import { ProductosSinStock } from 'src/productos_sin_stock/entities/productos_sin_stock.entity';

const useSSL = (process.env.POSTGRES_SSL === 'true') || (process.env.NODE_ENV === 'production');

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    schema: 'Inventario',
    entities: [AjusteInventario, Cliente, Empleado, MovimientoInventario, Producto, ReservasVentaInventario, ProductosSinStock],

    migrations: [
        process.env.NODE_ENV === 'production'
            ? 'dist/db/migrations/*.js'
            : 'src/db/migrations/*.ts',
    ],

    ssl: useSSL ? { rejectUnauthorized: false } : false,
    extra: useSSL
        ? {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
        : undefined,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;