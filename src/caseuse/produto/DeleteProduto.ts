import { PrismaClient, Produto } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeProduto{
    id: string
}

export async function DeletandoProduto(input:typeProduto) {
    const{ id } = input

    try {
        const delProduto = await prisma.produto.delete({
          where: { id }
        })
        return delProduto
      } catch (error) {
        throw new Error('Não foi possível deletar o produto.')
    }
}
