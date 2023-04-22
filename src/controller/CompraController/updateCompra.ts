import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoCompra } from "../../caseuse/compra/UpdateCompra";

export const prisma = new PrismaClient;

export async function updateCompraController(req: Request, res: Response) {
    const { id } = req.params
    const { precoCompra, clienteId, funcionarioId, cardapiodacompra } = req.body
  
    try {
      const recurso = await AtualizandoCompra({ id: String(id), precoCompra, clienteId, funcionarioId, cardapiodacompra})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }