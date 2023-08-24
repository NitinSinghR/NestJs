import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatedUserTable1692867453921 implements MigrationInterface {
    name = 'UpdatedUserTable1692867453921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "postOrderNumber" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "postOrderNumber"`);
    }

}
