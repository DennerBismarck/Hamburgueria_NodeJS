import { PrismaClient, Tipo } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeTipo{
    nometipo: string
}

export class CriandoTipo{
    async execute({nometipo}: typeTipo): Promise<Tipo>{
        const novoTipo = await prisma.tipo.create({
            data:{
                nometipo: nometipo
            }
        })
        return novoTipo;
    }
}