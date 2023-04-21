import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoFuncionario } from "../../caseuse/funcionario/DeleteFuncionario";

export const prisma = new PrismaClient;

export async function deleteFuncionarioController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoFuncionario({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }