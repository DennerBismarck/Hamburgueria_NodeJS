import { PrismaClient, Funcao } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncao{
    nomefuncao: string
}

export class LendoFuncao{
    async execute(): Promise<Funcao[]>{
        const ArrayFuncao = await prisma.funcao.findMany({})
        return ArrayFuncao;
    }
}
