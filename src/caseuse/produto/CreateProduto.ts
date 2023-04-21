import { PrismaClient, Produto } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeProduto{
    nome: string
    preco: number
    descricao: string
    tipoId: string
}

export class CriandoProduto{
    async execute({nome, preco, descricao, tipoId}: typeProduto): Promise<Produto>{
        const novoProduto = await prisma.produto.create({
            data:{
                nome: nome,
                preco: preco,
                descricao: descricao,
                tipoId: tipoId,
            }
        })
        return novoProduto
    }
}