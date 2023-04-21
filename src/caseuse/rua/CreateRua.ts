import { PrismaClient, Rua } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeRua{
    nomerua: string
    bairroId: string
}

export class CriandoRua{
    async execute({nomerua,bairroId}: typeRua): Promise<Rua>{
        const novaRua = await prisma.rua.create({
            data:{
                nomerua: nomerua,
                bairroId: bairroId
            }
        })
        return novaRua
    }
}