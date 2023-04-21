import { PrismaClient, Bairro } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeBairro{
    nomebairro: string
}

export class LendoBairro{
    async execute(): Promise<Bairro[]>{
        const ArrayBairro = await prisma.bairro.findMany({})
        return ArrayBairro;
    }
}
