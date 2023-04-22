import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoCompra } from "../../caseuse/compra/DeleteCompra";

export const prisma = new PrismaClient;

export async function deleteCompraController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoCompra({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }