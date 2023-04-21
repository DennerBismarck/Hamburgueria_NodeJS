import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoBairro } from "../../caseuse/bairro/UpdateBairro";

export const prisma = new PrismaClient;

export async function updateBairroController(req: Request, res: Response) {
    const { id } = req.params
    const { nomebairro } = req.body
  
    try {
      const recurso = await AtualizandoBairro({ id: String(id), nomebairro})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }