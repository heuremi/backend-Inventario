import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEmpleado1761521292530 implements MigrationInterface {
    name = 'UpdateEmpleado1761521292530'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" ADD "rut" text NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" SET DEFAULT ('now'::text)::date`);
        await queryRunner.query(`ALTER TABLE "empleado" DROP COLUMN "rut"`);
    }

}
