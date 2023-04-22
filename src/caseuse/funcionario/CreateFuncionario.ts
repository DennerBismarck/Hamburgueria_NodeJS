import { PrismaClient, Funcionario } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncionario{
    nome: string
    cpf: string
    telefone: string
    numeroEndereco: string
    funcao: string
    ruaId: string
}

export class CriandoFuncionario{
    async execute({nome,cpf, telefone, numeroEndereco, ruaId, funcao}: typeFuncionario): Promise<Funcionario>{
        const novoFuncionario = await prisma.funcionario.create({
            data:{
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                numeroEndereco: numeroEndereco,
                ruaId: ruaId,
                funcao: funcao,
            }
        })
        return novoFuncionario
    }
}