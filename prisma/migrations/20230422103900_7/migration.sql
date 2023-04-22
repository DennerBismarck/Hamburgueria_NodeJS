/*
  Warnings:

  - You are about to drop the `produto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos_das_compras` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cardapiodacompra` to the `compra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `produto` DROP FOREIGN KEY `produto_tipoId_fkey`;

-- DropForeignKey
ALTER TABLE `produtos_das_compras` DROP FOREIGN KEY `produtos_das_compras_compraId_fkey`;

-- DropForeignKey
ALTER TABLE `produtos_das_compras` DROP FOREIGN KEY `produtos_das_compras_produtoId_fkey`;

-- AlterTable
ALTER TABLE `compra` ADD COLUMN `cardapiodacompra` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `produto`;

-- DropTable
DROP TABLE `produtos_das_compras`;

-- DropTable
DROP TABLE `tipo`;
