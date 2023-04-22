/*
  Warnings:

  - Made the column `ruaId` on table `cliente` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ruaId` on table `funcionario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `funcaoId` on table `funcionario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `cliente` DROP FOREIGN KEY `cliente_ruaId_fkey`;

-- DropForeignKey
ALTER TABLE `funcionario` DROP FOREIGN KEY `funcionario_funcaoId_fkey`;

-- DropForeignKey
ALTER TABLE `funcionario` DROP FOREIGN KEY `funcionario_ruaId_fkey`;

-- AlterTable
ALTER TABLE `cliente` MODIFY `ruaId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `funcionario` MODIFY `ruaId` VARCHAR(191) NOT NULL,
    MODIFY `funcaoId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `cliente_ruaId_fkey` FOREIGN KEY (`ruaId`) REFERENCES `rua`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_funcaoId_fkey` FOREIGN KEY (`funcaoId`) REFERENCES `funcao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_ruaId_fkey` FOREIGN KEY (`ruaId`) REFERENCES `rua`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
