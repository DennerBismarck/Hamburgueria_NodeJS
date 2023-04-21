import { PrismaClient, Funcao } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncao{
    id: string
    nomefuncao: string
}

export async function AtualizandoFuncao(input:typeFuncao) {
    const{ id, nomefuncao } = input

    try {
        const attFuncao = await prisma.funcao.update({
          where: { id },
          data: { nomefuncao }
        })
        return attFuncao
      } catch (error) {
        throw new Error('Não foi possível atualizar a função.')
    }
}
