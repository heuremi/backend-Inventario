import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateFechaIngreso1761506255123 implements MigrationInterface {
    name = 'UpdateFechaIngreso1761506255123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" SET DEFAULT ('now'::text)::date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "empleado" ALTER COLUMN "fecha_ingreso" SET DEFAULT now()`);
    }

}
