import { PrismaClient, Bairro } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeBairro{
    id: string
}

export async function DeletandoBairro(input:typeBairro) {
    const{ id } = input

    try {
        const delBairro = await prisma.bairro.delete({
          where: { id }
        })
        return delBairro
      } catch (error) {
        throw new Error('Não foi possível deletar o bairro.')
    }
}
