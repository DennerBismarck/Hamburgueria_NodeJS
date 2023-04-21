import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoRua } from "../../caseuse/rua/CreateRua";

export const prisma = new PrismaClient;

export class CreateRuaController{
    async handler(req: Request, res: Response){
        const {nomerua, bairroId} = req.body;
        try{
            //Verificando se a rua ja existe
            if(await prisma.rua.findUnique({where:{nomerua:nomerua}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Rua já existente."});
            }

            //Verificando se o bairro existe
            if(!(await prisma.bairro.findUnique({where:{id: bairroId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "O bairro selecionado não existe."})
            }

            const create = new CriandoRua();
            //Criando rua
            const rua = await create.execute({nomerua, bairroId});
                
            return res.send({
                rua,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de rua."});
        }
    }

}