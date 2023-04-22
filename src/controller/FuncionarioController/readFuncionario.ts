import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoFuncionario } from "../../caseuse/funcionario/ReadFuncionario";

export const prisma = new PrismaClient;

export class ReadFuncionarioController{
    async handler(req: Request, res: Response){
        
        //Read das ruas
        const read = new LendoFuncionario();
        const rua = await read.execute();      
        return res.status(201).json(rua)
    }

}