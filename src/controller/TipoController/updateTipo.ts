import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoTipo } from "../../caseuse/tipo/UpdateTipo";

export const prisma = new PrismaClient;

export async function updateTipoController(req: Request, res: Response) {
    const { id } = req.params
    const { nometipo } = req.body
  
    try {
      const recurso = await AtualizandoTipo({ id: String(id), nometipo})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }