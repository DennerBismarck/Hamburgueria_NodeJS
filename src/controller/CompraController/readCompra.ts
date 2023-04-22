import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoCompra } from "../../caseuse/compra/ReadCompra";

export const prisma = new PrismaClient;

export class ReadCompraController{
    async handler(req: Request, res: Response){
        
        //Read das compras
        const read = new LendoCompra();
        const compra = await read.execute();      
        return res.status(201).json(compra)
    }

}