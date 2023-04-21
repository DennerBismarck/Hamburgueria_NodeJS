/*
  Warnings:

  - You are about to drop the column `tipo` on the `tipo` table. All the data in the column will be lost.
  - Added the required column `nometipo` to the `tipo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tipo` DROP COLUMN `tipo`,
    ADD COLUMN `nometipo` VARCHAR(191) NOT NULL;
