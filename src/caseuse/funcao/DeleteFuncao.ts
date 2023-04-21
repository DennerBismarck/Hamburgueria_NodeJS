import { PrismaClient, Funcao } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncao{
    id: string
}

export async function DeletandoFuncao(input:typeFuncao) {
    const{ id } = input

    try {
        const delFuncao = await prisma.funcao.delete({
          where: { id }
        })
        return delFuncao
      } catch (error) {
        throw new Error('Não foi possível deletar a função.')
    }
}
