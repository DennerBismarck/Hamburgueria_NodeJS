import { PrismaClient, Compra } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCompra{
    precoCompra: number
    clienteId: string
    funcionarioId: string
    cardapiodacompra: string
}

export class LendoCompra{
    async execute(): Promise<Compra[]>{
        const ArrayCompra = await prisma.compra.findMany({
            //Fazendo com que apareça o funcionário e o cliente da compra
            include: {
                Cliente:{
                    select:{
                        nome: true,
                    }
                },
                Funcionario: {
                    select:{
                        nome: true,
                    }
                }
            }

        })
        return ArrayCompra;
    }
}
