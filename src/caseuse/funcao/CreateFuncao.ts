import { PrismaClient, Funcao } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeFuncao{
    nomefuncao: string
}

export class CriandoFuncao{
    async execute({nomefuncao}: typeFuncao): Promise<Funcao>{
        const novaFuncao = await prisma.funcao.create({
            data:{
                nomefuncao: nomefuncao
            }
        })
        return novaFuncao;
    }
}