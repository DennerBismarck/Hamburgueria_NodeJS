import { PrismaClient, Rua } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeRua{
    id: string
    nomerua: string
    bairroId: string
}

export async function AtualizandoRua(input:typeRua) {
    const{ id, nomerua, bairroId } = input

    try {
        const attRua = await prisma.rua.update({
          where: { id },
          data: { nomerua, bairroId }
        })
        return attRua
      } catch (error) {
        throw new Error('Não foi possível atualizar a rua.')
    }
}
