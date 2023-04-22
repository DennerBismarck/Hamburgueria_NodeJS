/*
  Warnings:

  - You are about to drop the column `funcaoId` on the `funcionario` table. All the data in the column will be lost.
  - You are about to drop the `funcao` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `funcao` to the `funcionario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `funcionario` DROP FOREIGN KEY `funcionario_funcaoId_fkey`;

-- AlterTable
ALTER TABLE `funcionario` DROP COLUMN `funcaoId`,
    ADD COLUMN `funcao` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `funcao`;
