import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateReservas1763515176191 implements MigrationInterface {
    name = 'UpdateReservas1763515176191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reservas_venta_inventario" ("id" SERIAL NOT NULL, "ventaId" numeric NOT NULL, "stock" numeric NOT NULL, "fechaReserva" TIMESTAMP NOT NULL DEFAULT now(), "productoId" integer, "clienteId" integer, CONSTRAINT "PK_5110d59702f225e23e0abd68f01" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "FK_55d8ba41803d3f2841927288472" FOREIGN KEY ("productoId") REFERENCES "producto"("id_producto") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" ADD CONSTRAINT "FK_ec970efb5a8c384d00c98a83ab1" FOREIGN KEY ("clienteId") REFERENCES "cliente"("id_cliente") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "FK_ec970efb5a8c384d00c98a83ab1"`);
        await queryRunner.query(`ALTER TABLE "reservas_venta_inventario" DROP CONSTRAINT "FK_55d8ba41803d3f2841927288472"`);
        await queryRunner.query(`DROP TABLE "reservas_venta_inventario"`);
        await queryRunner.query(`ALTER TABLE "Inventario"."ajustes_inventario" RENAME COLUMN "stock" TO "cantidad"`);
    }

}
