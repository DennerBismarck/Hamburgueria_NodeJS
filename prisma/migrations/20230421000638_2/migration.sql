/*
  Warnings:

  - You are about to drop the column `bairro` on the `bairro` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nomebairro]` on the table `bairro` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nomebairro` to the `bairro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bairro` DROP COLUMN `bairro`,
    ADD COLUMN `nomebairro` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `bairro_nomebairro_key` ON `bairro`(`nomebairro`);
