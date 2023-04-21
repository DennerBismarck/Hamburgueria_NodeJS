import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoProduto } from "../../caseuse/produto/UpdateProduto";

export const prisma = new PrismaClient;

export async function updateProdutoController(req: Request, res: Response) {
    const { id } = req.params
    const { nome, preco, descricao, tipoId} = req.body
  
    try {
      const recurso = await AtualizandoProduto({ id: String(id), nome, preco, descricao, tipoId})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }