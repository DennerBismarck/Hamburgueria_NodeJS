import { PrismaClient, Tipo } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeTipo{
    nometipo: string
}

export class LendoTipo{
    async execute(): Promise<Tipo[]>{
        const ArrayTipo = await prisma.tipo.findMany({})
        return ArrayTipo;
    }
}
