import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoTipo } from "../../caseuse/tipo/ReadTipo";

export const prisma = new PrismaClient;

export class ReadTipoController{
    async handler(req: Request, res: Response){
        
        //Read dos tipos
        const read = new LendoTipo();
        const tipo = await read.execute();      
        return res.status(201).json(tipo)
    }

}