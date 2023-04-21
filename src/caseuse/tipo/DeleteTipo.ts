import { PrismaClient, Tipo } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeTipo{
    id: string
}

export async function DeletandoTipo(input:typeTipo) {
    const{ id } = input

    try {
        const delTipo = await prisma.tipo.delete({
          where: { id }
        })
        return delTipo
      } catch (error) {
        throw new Error('Não foi possível deletar o tipo.')
    }
}
