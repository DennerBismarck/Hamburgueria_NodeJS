import { PrismaClient, Cliente } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCliente{
    nome: string
    cpf: string
    telefone: string
    numeroEndereco: string
    ruaId: string
}

export class CriandoCliente{
    async execute({nome,cpf, telefone, numeroEndereco, ruaId}: typeCliente): Promise<Cliente>{
        const novoCliente = await prisma.cliente.create({
            data:{
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                numeroEndereco: numeroEndereco,
                ruaId: ruaId,
            }
        })
        return novoCliente
    }
}