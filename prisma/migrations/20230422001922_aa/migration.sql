-- DropForeignKey
ALTER TABLE `cliente` DROP FOREIGN KEY `cliente_ruaId_fkey`;

-- DropForeignKey
ALTER TABLE `funcionario` DROP FOREIGN KEY `funcionario_funcaoId_fkey`;

-- DropForeignKey
ALTER TABLE `funcionario` DROP FOREIGN KEY `funcionario_ruaId_fkey`;

-- AlterTable
ALTER TABLE `cliente` MODIFY `ruaId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `funcionario` MODIFY `ruaId` VARCHAR(191) NULL,
    MODIFY `funcaoId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `cliente_ruaId_fkey` FOREIGN KEY (`ruaId`) REFERENCES `rua`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_funcaoId_fkey` FOREIGN KEY (`funcaoId`) REFERENCES `funcao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_ruaId_fkey` FOREIGN KEY (`ruaId`) REFERENCES `rua`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
