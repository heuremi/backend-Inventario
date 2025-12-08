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
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP CONSTRAINT "FK_a594c7a787981dff38c762e4cd8"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "FK_5964a1917ad27533366014e6631"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "FK_a20d3b520b134f2dfa8c7dd2e92"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ALTER COLUMN "fecha_sin_stock" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP COLUMN "precio_venta"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD "precio_venta" numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP COLUMN "codigo"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD "codigo" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD "nombre" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "telefono" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "email" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "rol"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "rol" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "apellido"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "apellido" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "nombre" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "cantidad" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "precio_venta" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ALTER COLUMN "codigo" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "nombre" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP COLUMN "id_cliente"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD "id_cliente" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP COLUMN "id_producto"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD "id_producto" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "PK_4b56462fa680d05fac22611066c"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "motivo_baja" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "fecha_baja" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "estado" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "id_departamento" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD "id_carrito" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" RENAME COLUMN "stock" TO "cantidad"`);
        await queryRunner.query(`ALTER TABLE "productos_sin_stock" ADD CONSTRAINT "productos_sin_stock_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "reservas_venta_inventario_id_producto_fkey" FOREIGN KEY ("id_producto") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "reservas_venta_inventario_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
