import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoBairro } from "../../caseuse/bairro/ReadBairro";

export const prisma = new PrismaClient;

export class ReadBairroController{
    async handler(req: Request, res: Response){
        
        //Read dos bairros
        const read = new LendoBairro();
        const bairro = await read.execute();      
        return res.status(201).json(bairro)
    }

}