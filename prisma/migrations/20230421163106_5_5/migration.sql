/*
  Warnings:

  - You are about to drop the column `rua` on the `rua` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nomerua]` on the table `rua` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nomerua` to the `rua` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `rua_rua_key` ON `rua`;

-- AlterTable
ALTER TABLE `rua` DROP COLUMN `rua`,
    ADD COLUMN `nomerua` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `rua_nomerua_key` ON `rua`(`nomerua`);
