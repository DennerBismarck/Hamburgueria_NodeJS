import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoFuncao } from "../../caseuse/funcao/DeleteFuncao";

export const prisma = new PrismaClient;

export async function deleteFuncaoController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoFuncao({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }