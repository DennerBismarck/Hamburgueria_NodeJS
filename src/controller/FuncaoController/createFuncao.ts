import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoFuncao } from "../../caseuse/funcao/CreateFuncao";

export const prisma = new PrismaClient;

export class CreateFuncaoController{
    async handler(req: Request, res: Response){
        const {nomefuncao} = req.body;
        try{
            //Verificando se a função ja existe
            
            if(await prisma.funcao.findUnique({where:{nomefuncao:nomefuncao}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Função já existente."});
            }
            const create = new CriandoFuncao();
            //Criando tipo
            const funcao = await create.execute({nomefuncao});
                
            return res.send({
                funcao,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de função."});
        }
    }

}