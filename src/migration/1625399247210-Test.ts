import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1625399247210 implements MigrationInterface {
  name = "Test1625399247210";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "CREATE TABLE `todos` (`id` int NOT NULL AUTO_INCREMENT, `userId` int NOT NULL, `title` varchar(255) NOT NULL, `context` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB"
    );
    await queryRunner.query(
      "ALTER TABLE `todos` ADD CONSTRAINT `FK_4583be7753873b4ead956f040e3` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE `todos` DROP FOREIGN KEY `FK_4583be7753873b4ead956f040e3`"
    );
    await queryRunner.query("DROP TABLE `todos`");
    await queryRunner.query("DROP TABLE `user`");
  }
}
