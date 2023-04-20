-- CreateTable
CREATE TABLE `bairro` (
    `id` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `bairro_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rua` (
    `id` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `bairroId` VARCHAR(191) NULL,

    UNIQUE INDEX `rua_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcao` (
    `id` VARCHAR(191) NOT NULL,
    `funcao` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `funcao_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo` (
    `id` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tipo_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `numeroEndereco` VARCHAR(191) NOT NULL,
    `ruaId` VARCHAR(191) NULL,

    UNIQUE INDEX `cliente_id_key`(`id`),
    UNIQUE INDEX `cliente_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `numeroEndereco` VARCHAR(191) NOT NULL,
    `ruaId` VARCHAR(191) NULL,
    `funcaoId` VARCHAR(191) NULL,

    UNIQUE INDEX `funcionario_id_key`(`id`),
    UNIQUE INDEX `funcionario_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `tipoId` VARCHAR(191) NULL,

    UNIQUE INDEX `produto_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compra` (
    `id` VARCHAR(191) NOT NULL,
    `precoCompra` DOUBLE NOT NULL,
    `dataCompra` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `clienteId` VARCHAR(191) NULL,
    `funcionarioId` VARCHAR(191) NULL,

    UNIQUE INDEX `compra_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos_das_compras` (
    `id` VARCHAR(191) NOT NULL,
    `compraId` VARCHAR(191) NULL,
    `produtoId` VARCHAR(191) NULL,

    UNIQUE INDEX `produtos_das_compras_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `rua` ADD CONSTRAINT `rua_bairroId_fkey` FOREIGN KEY (`bairroId`) REFERENCES `bairro`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `cliente_ruaId_fkey` FOREIGN KEY (`ruaId`) REFERENCES `rua`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_ruaId_fkey` FOREIGN KEY (`ruaId`) REFERENCES `rua`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_funcaoId_fkey` FOREIGN KEY (`funcaoId`) REFERENCES `funcao`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_tipoId_fkey` FOREIGN KEY (`tipoId`) REFERENCES `tipo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `cliente`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `compra` ADD CONSTRAINT `compra_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `funcionario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos_das_compras` ADD CONSTRAINT `produtos_das_compras_compraId_fkey` FOREIGN KEY (`compraId`) REFERENCES `compra`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produtos_das_compras` ADD CONSTRAINT `produtos_das_compras_produtoId_fkey` FOREIGN KEY (`produtoId`) REFERENCES `produto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
