import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoCliente } from "../../caseuse/cliente/ReadCliente";

export const prisma = new PrismaClient;

export class ReadClienteController{
    async handler(req: Request, res: Response){
        
        //Read das ruas
        const read = new LendoCliente();
        const rua = await read.execute();      
        return res.status(201).json(rua)
    }

}