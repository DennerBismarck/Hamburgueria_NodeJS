import { PrismaClient, Cliente } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCliente{
    nome: string
    cpf: string
    telefone: string
    numeroEndereco: string
    ruaId: string
}

export class LendoCliente{
    async execute(): Promise<Cliente[]>{
        const ArrayCliente = await prisma.cliente.findMany({
            //Fazendo com que apareça a rua e o bairro que o cliente pertence
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
        return ArrayCliente;
    }
}
