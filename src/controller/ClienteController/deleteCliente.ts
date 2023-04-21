import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { DeletandoCliente } from "../../caseuse/cliente/DeleteCliente";

export const prisma = new PrismaClient;

export async function deleteClienteController(req: Request, res: Response) {
    const { id } = req.params  
    try {
      const recurso = await DeletandoCliente({ id: String(id)})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }