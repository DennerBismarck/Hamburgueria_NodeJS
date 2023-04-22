import { PrismaClient, Funcionario } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncionario{
    id: string
}

export async function DeletandoFuncionario(input:typeFuncionario) {
    const{ id } = input

    try {
        const delFuncionario = await prisma.funcionario.delete({
          where: { id }
        })
        return delFuncionario
      } catch (error) {
        throw new Error('Não foi possível deletar o funcionário.')
    }
}
