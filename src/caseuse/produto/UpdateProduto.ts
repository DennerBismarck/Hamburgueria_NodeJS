import { PrismaClient, Cliente } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeProduto{
    id: string
    nome: string
    preco: number
    descricao: string
    tipoId: string
}

export async function AtualizandoProduto(input:typeProduto) {
    const{ id, nome, preco, descricao, tipoId } = input

    try {
        const attProduto = await prisma.produto.update({
          where: { id },
          data: { nome, preco, descricao, tipoId }
        })
        return attProduto
      } catch (error) {
        throw new Error('Não foi possível atualizar o produto.')
    }
}
