import { PrismaClient, Bairro } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeBairro{
    id: string
    nomebairro: string
}

export async function AtualizandoBairro(input:typeBairro) {
    const{ id, nomebairro } = input

    try {
        const attBairro = await prisma.bairro.update({
          where: { id },
          data: { nomebairro }
        })
        return attBairro
      } catch (error) {
        throw new Error('Não foi possível atualizar o bairro.')
    }
}
