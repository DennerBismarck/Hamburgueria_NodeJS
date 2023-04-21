import { PrismaClient, Cliente } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCliente{
    id: string
    nome: string
    cpf: string
    telefone: string
    numeroEndereco: string
    ruaId: string
}

export async function AtualizandoCliente(input:typeCliente) {
    const{ id, nome, cpf, telefone, numeroEndereco, ruaId } = input

    try {
        const attCliente = await prisma.cliente.update({
          where: { id },
          data: { nome, cpf, telefone, numeroEndereco, ruaId }
        })
        return attCliente
      } catch (error) {
        throw new Error('Não foi possível atualizar o cliente.')
    }
}
