import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoCliente } from "../../caseuse/cliente/UpdateCliente";

export const prisma = new PrismaClient;

export async function updateClienteController(req: Request, res: Response) {
    const { id } = req.params
    const { nome, cpf, telefone, numeroEndereco, ruaId } = req.body
  
    try {
      const recurso = await AtualizandoCliente({ id: String(id), nome, cpf, telefone, numeroEndereco, ruaId,})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }