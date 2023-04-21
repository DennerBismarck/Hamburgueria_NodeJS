import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoBairro } from "../../caseuse/bairro/DeleteBairro";

export const prisma = new PrismaClient;

export async function deleteBairroController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoBairro({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }