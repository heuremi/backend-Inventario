import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProducto1765154403033 implements MigrationInterface {
    name = 'UpdateProducto1765154403033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "reservas_venta_inventario_id_producto_fkey"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP CONSTRAINT "productos_sin_stock_id_producto_fkey"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "reservas_venta_inventario_id_cliente_fkey"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP COLUMN "id_carrito"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "id_departamento"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "fecha_baja"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "motivo_baja"`);
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" RENAME COLUMN "cantidad" TO "stock"`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "codigo" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "precio_venta" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "cantidad" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "PK_4b56462fa680d05fac22611066c" PRIMARY KEY ("id_reserva")`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "FK_a20d3b520b134f2dfa8c7dd2e92" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "FK_5964a1917ad27533366014e6631" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD CONSTRAINT "FK_a594c7a787981dff38c762e4cd8" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // --- 1. REVERTIR CLAVES FORÁNEAS (DEBEN IR PRIMERO) ---
        // Se revierten las FKs para volver al estado original (bigint NOT NULL)
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD CONSTRAINT "productos_sin_stock_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "reservas_venta_inventario_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "reservas_venta_inventario_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);

        // --- 2. REVERTIR ELIMINACIÓN DE CLAVES PRIMARIAS Y COLUMNAS ---
        // Se revierten las eliminaciones de columnas (DROP COLUMN) que no tenían dependencias de vistas.
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" RENAME COLUMN "stock" TO "cantidad"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD "id_carrito" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "id_departamento" bigint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "estado" character varying(20) NOT NULL DEFAULT 'ACTIVO'`);
        
        // Revertir PK de reservas_venta_inventario
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "PK_4b56462fa680d05fac22611066c"`);


        // --- 3. REVERTIR CAMBIOS DE TIPO (ALTER COLUMN) ---

        // EMPLEADO: Revertir de TEXT (NULLABLE/DEFAULT '') a tipos originales (sin eliminar columna por vistas)
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "telefono" TYPE character varying(20)`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "email" TYPE character varying(100)`);

        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "nombre" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "apellido" SET NOT NULL`);


        // PRODUCTO: Revertir a NOT NULL (asumiendo que los datos existentes no son NULL)
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "cantidad" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "precio_venta" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "codigo" SET NOT NULL`);

        // CLIENTE: Revertir de TEXT (NOT NULL/DEFAULT) a tipos originales

        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "estado" TYPE character varying(50)`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "email" TYPE character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "telefono" TYPE character varying(20)`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "direccion" TYPE character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "apellido" TYPE character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "nombre" TYPE character varying(100)`);

        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "nombre" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "apellido" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "estado" SET NOT NULL`);


        // RESERVAS_VENTA_INVENTARIO: Revertir a bigint NOT NULL
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP COLUMN "id_cliente"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD "id_cliente" bigint NOT NULL`);

        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP COLUMN "id_producto"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD "id_producto" bigint NOT NULL`);

        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ALTER COLUMN "fechareserva" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ALTER COLUMN "fechareserva" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD "stock" bigint NOT NULL`);


        // PRODUCTOS_SIN_STOCK: Revertir a tipos originales
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ALTER COLUMN "fecha_sin_stock" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP COLUMN "precio_venta"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD "precio_venta" numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP COLUMN "codigo"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD "codigo" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP COLUMN "nombre"`);
        
    }

}
