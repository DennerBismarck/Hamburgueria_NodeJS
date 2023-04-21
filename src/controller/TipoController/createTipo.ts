import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoTipo } from "../../caseuse/tipo/CreateTipo";

export const prisma = new PrismaClient;

export class CreateTipoController{
    async handler(req: Request, res: Response){
        const {nometipo} = req.body;
        try{
            //Verificando se o tipo ja existe
            
            if(await prisma.tipo.findUnique({where:{nometipo:nometipo}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Tipo já existente."});
            }
            const create = new CriandoTipo();
            //Criando tipo
            const tipo = await create.execute({nometipo});
                
            return res.send({
                tipo,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de tipo."});
        }
    }

}