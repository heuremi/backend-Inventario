import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEmpleado1761505679543 implements MigrationInterface {
    name = 'UpdateEmpleado1761505679543'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" DROP CONSTRAINT "empleado_id_departamento_fkey"`);
        await queryRunner.query(`DROP INDEX "public"."empleado_rut_key"`);
        await queryRunner.query(`DROP INDEX "public"."empleado_id_departamento_idx"`);
        await queryRunner.query(`DROP INDEX "public"."empleado_estado_idx"`);
        await queryRunner.query(`DROP INDEX "public"."empleado_email_key"`);
        await queryRunner.query(`CREATE TABLE "Inventario"."movimientos_inventario" ("id" SERIAL NOT NULL, "cantidad" numeric NOT NULL, "tipo_movimiento" text NOT NULL, "observaciones" text, "fechaMovimiento" TIMESTAMP NOT NULL DEFAULT now(), "productoId" integer, "empleadoId" integer, CONSTRAINT "PK_812f6e4f95b017981363c4b9ff9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Inventario"."reservas_inventario" ("id" SERIAL NOT NULL, "cantidad" numeric NOT NULL, "fechaReserva" TIMESTAMP NOT NULL DEFAULT now(), "productoId" integer, "clienteId" integer, CONSTRAINT "PK_0e4a144382faefb470e637f6940" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Inventario"."ajustes_inventario" ("id" SERIAL NOT NULL, "cantidad" numeric NOT NULL, "observaciones" text, "fechaAjuste" TIMESTAMP NOT NULL DEFAULT now(), "empleadoId" integer, "productoId" integer, CONSTRAINT "PK_186ce8481a7cd8dac85a71ddb01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "rut"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "id_departamento"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "fecha_baja"`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "motivo_baja"`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "codigo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" ADD CONSTRAINT "UQ_4ecaa777d3efc10b5a6327cfe42" UNIQUE ("codigo")`);
        await queryRunner.query(`ALTER TABLE "producto" ADD "precio_venta" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "nombre" text`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "apellido"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "apellido" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "direccion"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "direccion" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "telefono" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "email" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "estado" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "nombre" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "apellido"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "apellido" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "rol"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "rol" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "email" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "telefono" text`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" TYPE TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "Inventario"."movimientos_inventario" ADD CONSTRAINT "FK_36a689b5824051c8a5308fcf08c" FOREIGN KEY ("productoId") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Inventario"."movimientos_inventario" ADD CONSTRAINT "FK_aa55b54cde161ed6b8a187e0b09" FOREIGN KEY ("empleadoId") REFERENCES "empleado"("id_empleado") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Inventario"."reservas_inventario" ADD CONSTRAINT "FK_f0dc4dae3b2ea1eb367fb680a34" FOREIGN KEY ("productoId") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Inventario"."reservas_inventario" ADD CONSTRAINT "FK_c39ec5d06c31f0d1d0160934099" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" ADD CONSTRAINT "FK_e307a3b0cce7a1a33a7fc3157d9" FOREIGN KEY ("empleadoId") REFERENCES "empleado"("id_empleado") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" ADD CONSTRAINT "FK_82ebeaa2ac61382e94197d94997" FOREIGN KEY ("productoId") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" DROP CONSTRAINT "FK_82ebeaa2ac61382e94197d94997"`);
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" DROP CONSTRAINT "FK_e307a3b0cce7a1a33a7fc3157d9"`);
        await queryRunner.query(`ALTER TABLE "Inventario"."reservas_inventario" DROP CONSTRAINT "FK_c39ec5d06c31f0d1d0160934099"`);
        await queryRunner.query(`ALTER TABLE "Inventario"."reservas_inventario" DROP CONSTRAINT "FK_f0dc4dae3b2ea1eb367fb680a34"`);
        await queryRunner.query(`ALTER TABLE "Inventario"."movimientos_inventario" DROP CONSTRAINT "FK_aa55b54cde161ed6b8a187e0b09"`);
        await queryRunner.query(`ALTER TABLE "Inventario"."movimientos_inventario" DROP CONSTRAINT "FK_36a689b5824051c8a5308fcf08c"`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" TYPE TIMESTAMP(3)`);
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
        await queryRunner.query(`ALTER TABLE "cliente" ALTER COLUMN "estado" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "email" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "telefono" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "direccion"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "direccion" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "apellido"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "apellido" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cliente" DROP COLUMN "nombre"`);
        await queryRunner.query(`ALTER TABLE "cliente" ADD "nombre" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "precio_venta"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP CONSTRAINT "UQ_4ecaa777d3efc10b5a6327cfe42"`);
        await queryRunner.query(`ALTER TABLE "producto" DROP COLUMN "codigo"`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "motivo_baja" text`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "fecha_baja" TIMESTAMP(3)`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "estado" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "id_departamento" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "empleado" ADD "rut" text NOT NULL`);
        await queryRunner.query(`DROP TABLE "Inventario"."ajustes_inventario"`);
        await queryRunner.query(`DROP TABLE "Inventario"."reservas_inventario"`);
        await queryRunner.query(`DROP TABLE "Inventario"."movimientos_inventario"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "empleado_email_key" ON "empleado" ("email") `);
        await queryRunner.query(`CREATE INDEX "empleado_estado_idx" ON "empleado" ("estado") `);
        await queryRunner.query(`CREATE INDEX "empleado_id_departamento_idx" ON "empleado" ("id_departamento") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "empleado_rut_key" ON "empleado" ("rut") `);
        await queryRunner.query(`ALTER TABLE "empleado" ADD CONSTRAINT "empleado_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "RRHH"."rrhh_departamento"("id_departamento") ON DELETE RESTRICT ON UPDATE CASCADE`);
    }

}
