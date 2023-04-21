import { PrismaClient, Tipo } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeTipo{
    id: string
    nometipo: string
}

export async function AtualizandoTipo(input:typeTipo) {
    const{ id, nometipo } = input

    try {
        const attTipo = await prisma.tipo.update({
          where: { id },
          data: { nometipo }
        })
        return attTipo
      } catch (error) {
        throw new Error('Não foi possível atualizar o tipo.')
    }
}
