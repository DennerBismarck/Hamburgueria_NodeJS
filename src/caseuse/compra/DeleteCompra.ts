import { PrismaClient, Compra } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCompra{
    id: string
}

export async function DeletandoCompra(input:typeCompra) {
    const{ id } = input

    try {
        const delCompra = await prisma.compra.delete({
          where: { id }
        })
        return delCompra
      } catch (error) {
        throw new Error('Não foi possível deletar a compra.')
    }
}