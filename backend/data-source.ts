import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Empleado } from './src/empleados/entities/empleado.entity'; 
import { Cliente } from './src/clientes/entities/cliente.entity'; 
import { AjusteInventario } from 'src/ajustes_inventario/entities/ajuste_inventario.entity';
import { MovimientoInventario } from 'src/movimientos_inventario/entities/movimiento_inventario.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { ReservaInventario } from 'src/reservas_inventario/entities/reserva_inventario.entity';

dotenv.config(); 

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    schema: 'Inventario',
    
    entities: [AjusteInventario, Cliente, Empleado, MovimientoInventario, Producto, ReservaInventario],
    
    migrations: ['dist/db/migrations/*.js'], 

    ssl: {
        rejectUnauthorized: false,
    },
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;