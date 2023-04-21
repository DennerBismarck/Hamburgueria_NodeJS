import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AtualizandoFuncionario } from "../../caseuse/funcionario/UpdateFuncionario";

export const prisma = new PrismaClient;

export async function updateFuncionarioController(req: Request, res: Response) {
    const { id } = req.params
    const { nome, cpf, telefone, numeroEndereco, ruaId, funcaoId } = req.body
  
    try {
      const recurso = await AtualizandoFuncionario({ id: String(id), nome, cpf, telefone, numeroEndereco, ruaId, funcaoId})
      res.json(recurso)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }