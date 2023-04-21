import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoProduto } from "../../caseuse/produto/DeleteProduto";

export const prisma = new PrismaClient;

export async function deleteProdutoController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoProduto({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }