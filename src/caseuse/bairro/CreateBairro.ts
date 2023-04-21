import { PrismaClient, Bairro } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeBairro{
    nomebairro: string
}

export class CriandoBairro{
    async execute({nomebairro}: typeBairro): Promise<Bairro>{
        const novoBairro = await prisma.bairro.create({
            data:{
                nomebairro: nomebairro
            }
        })
        return novoBairro;
    }
}