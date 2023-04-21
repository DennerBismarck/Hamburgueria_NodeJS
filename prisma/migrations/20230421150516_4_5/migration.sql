/*
  Warnings:

  - A unique constraint covering the columns `[nometipo]` on the table `tipo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `tipo_nometipo_key` ON `tipo`(`nometipo`);
