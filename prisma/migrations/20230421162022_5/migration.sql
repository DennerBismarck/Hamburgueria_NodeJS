/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `produto` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rua]` on the table `rua` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `produto_nome_key` ON `produto`(`nome`);

-- CreateIndex
CREATE UNIQUE INDEX `rua_rua_key` ON `rua`(`rua`);
