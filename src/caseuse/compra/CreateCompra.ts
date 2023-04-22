import { PrismaClient, Compra } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCompra{
    precoCompra: number
    clienteId: string
    funcionarioId: string
    cardapiodacompra: string
}

export class CriandoCompra{
    async execute({clienteId, funcionarioId, cardapiodacompra, precoCompra}: typeCompra): Promise<Compra>{
        const novaCompra = await prisma.compra.create({
            data:{
                precoCompra: precoCompra,
                clienteId: clienteId,
                funcionarioId: funcionarioId,
                cardapiodacompra: cardapiodacompra,
            }
        })
        return novaCompra
    }
}