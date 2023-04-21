import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoBairro } from "../../caseuse/bairro/CreateBairro";

export const prisma = new PrismaClient;

export class CreateBairroController{
    async handler(req: Request, res: Response){
        const {nomebairro} = req.body;
        try{
            if(await prisma.bairro.findUnique({where:{nomebairro:nomebairro}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Bairro já existente."});
            }
            const create = new CriandoBairro();
            //Criando Bairro
            const bairro = await create.execute({nomebairro});
                
            return res.send({
                bairro,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de bairro."});
        }
    }

}