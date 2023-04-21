import { PrismaClient, Produto } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeCliente{
    nome: string
    preco: number
    descricao: string
    tipoId: string
}

export class LendoProduto{
    async execute(): Promise<Produto[]>{
        const ArrayProduto = await prisma.produto.findMany({
            //Fazendo com que apareça o tipo que o produto pertence
            include: {
                Tipo:{
                    select:{
                        nometipo: true,
                    },
                }
            }
        })
        return ArrayProduto;
    }
}
