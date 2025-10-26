import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { ClientesModule } from './clientes/clientes.module';
import { ReservasInventarioModule } from './reservas_inventario/reservas_inventario.module';
import { MovimientosInventarioModule } from './movimientos_inventario/movimientos_inventario.module';
import { AjustesInventarioModule } from './ajustes_inventario/ajustes_inventario.module';

@Module({
  imports: [ 
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT || '5432'),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      schema: 'Inventario',
      autoLoadEntities: true,
      ssl: { rejectUnauthorized: false },
      synchronize: false,
    }),

    ProductosModule,
    EmpleadosModule,
    ClientesModule,
    ReservasInventarioModule,
    MovimientosInventarioModule,
    AjustesInventarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
