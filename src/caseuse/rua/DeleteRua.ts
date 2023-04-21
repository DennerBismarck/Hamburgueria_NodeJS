import { PrismaClient, Tipo } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeRua{
    id: string
}

export async function DeletandoRua(input:typeRua) {
    const{ id } = input

    try {
        const delRua = await prisma.rua.delete({
          where: { id }
        })
        return delRua
      } catch (error) {
        throw new Error('Não foi possível deletar a rua.')
    }
}
