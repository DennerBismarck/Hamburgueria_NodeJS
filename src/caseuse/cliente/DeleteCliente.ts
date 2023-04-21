import { PrismaClient, Cliente } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCliente{
    id: string
}

export async function DeletandoCliente(input:typeCliente) {
    const{ id } = input

    try {
        const delCliente = await prisma.cliente.delete({
          where: { id }
        })
        return delCliente
      } catch (error) {
        throw new Error('Não foi possível deletar o cliente.')
    }
}
