import { PrismaClient, Funcionario } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncionario{
    id: string
    nome: string
    cpf: string
    telefone: string
    numeroEndereco: string
    ruaId: string
    funcaoId: string
}

export async function AtualizandoFuncionario(input:typeFuncionario) {
    const{ id, nome, cpf, telefone, numeroEndereco, ruaId, funcaoId } = input

    try {
        const attFuncionario = await prisma.funcionario.update({
          where: { id },
          data: { nome, cpf, telefone, numeroEndereco, ruaId, funcaoId }
        })
        return attFuncionario
      } catch (error) {
        throw new Error('Não foi possível atualizar o funcionário.')
    }
}
