/*
  Warnings:

  - A unique constraint covering the columns `[nomefuncao]` on the table `funcao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `funcao_nomefuncao_key` ON `funcao`(`nomefuncao`);
