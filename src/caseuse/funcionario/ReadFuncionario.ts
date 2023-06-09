import { PrismaClient, Funcionario } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncionario{
    nome: string
    cpf: string
    telefone: string
    numeroEndereco: string
    ruaId: string
    funcao: string
}

export class LendoFuncionario{
    async execute(): Promise<Funcionario[]>{
        const ArrayFuncionario = await prisma.funcionario.findMany({
            //Fazendo com que apareça a rua e o bairro que o funcionário pertence
            include: {
                Rua:{
                    select:{
                        nomerua: true,
                        Bairro:{
                            select:{
                                nomebairro: true,
                            }
                        }
                    },
                }
            }

        })
        return ArrayFuncionario;
    }
}
