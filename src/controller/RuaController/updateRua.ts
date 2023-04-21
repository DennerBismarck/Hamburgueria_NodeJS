import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoRua } from "../../caseuse/rua/UpdateRua";

export const prisma = new PrismaClient;

export async function updateRuaController(req: Request, res: Response) {
    const { id } = req.params
    const { nomerua, bairroId } = req.body
  
    try {
      const recurso = await AtualizandoRua({ id: String(id), nomerua, bairroId})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }