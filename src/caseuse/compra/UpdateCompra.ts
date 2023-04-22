import { PrismaClient, Compra } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCompra{
    id: string
    precoCompra: number
    clienteId: string
    funcionarioId: string
    cardapiodacompra: string
}

export async function AtualizandoCompra(input:typeCompra) {
    const{ id, precoCompra, clienteId, funcionarioId, cardapiodacompra } = input

    try {
        const attCompra = await prisma.compra.update({
          where: { id },
          data: { precoCompra, clienteId, funcionarioId, cardapiodacompra }
        })
        return attCompra
      } catch (error) {
        throw new Error('Não foi possível atualizar a compra.')
    }
}
