import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoFuncao } from "../../caseuse/funcao/ReadFuncao";

export const prisma = new PrismaClient;

export class ReadFuncaoController{
    async handler(req: Request, res: Response){
        
        //Read das funções
        const read = new LendoFuncao();
        const funcao = await read.execute();      
        return res.status(201).json(funcao)
    }

}