import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoRua } from "../../caseuse/rua/ReadRua";

export const prisma = new PrismaClient;

export class ReadRuaController{
    async handler(req: Request, res: Response){
        
        //Read das ruas
        const read = new LendoRua();
        const rua = await read.execute();      
        return res.status(201).json(rua)
    }

}