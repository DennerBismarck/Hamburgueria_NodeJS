import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoRua } from "../../caseuse/rua/DeleteRua";

export const prisma = new PrismaClient;

export async function deleteRuaController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoRua({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }