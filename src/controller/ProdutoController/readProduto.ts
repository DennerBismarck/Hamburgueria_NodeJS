import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { LendoProduto } from "../../caseuse/produto/ReadProduto";

export const prisma = new PrismaClient;

export class ReadProdutoController{
    async handler(req: Request, res: Response){
        
        //Read das ruas
        const read = new LendoProduto();
        const rua = await read.execute();      
        return res.status(201).json(rua)
    }

}