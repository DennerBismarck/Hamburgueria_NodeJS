import { PrismaClient, Rua } from '@prisma/client';
const prisma = new PrismaClient();

export interface typeRua{
    nomerua: string
}

export class LendoRua{
    async execute(): Promise<Rua[]>{
        const ArrayRua = await prisma.rua.findMany({
            //Fazendo com que apareça o Bairro que a rua pertence
            include: {
                Bairro:{
                    select:{
                        nomebairro: true
                    }
                }
            }

        })
        return ArrayRua;
    }
}
