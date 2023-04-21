import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoFuncao } from "../../caseuse/funcao/UpdateFuncao";

export const prisma = new PrismaClient;

export async function updateFuncaoController(req: Request, res: Response) {
    const { id } = req.params
    const { nomefuncao } = req.body
  
    try {
      const recurso = await AtualizandoFuncao({ id: String(id), nomefuncao})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }