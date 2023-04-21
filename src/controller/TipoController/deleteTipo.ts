import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoTipo } from "../../caseuse/tipo/DeleteTipo";

export const prisma = new PrismaClient;

export async function deleteTipoController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoTipo({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }