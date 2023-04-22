import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoFuncionario } from "../../caseuse/funcionario/CreateFuncionario";

export const prisma = new PrismaClient;

export class CreateFuncionarioController{
    async handler(req: Request, res: Response){
        const {nome, cpf, telefone, numeroEndereco, ruaId, funcao} = req.body;
        try{
            //Verificando se o funcionário ja existe
            if(await prisma.cliente.findUnique({where:{cpf:cpf}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Funcionário já existente."});
            }

            //Verificando se a rua do funcionário existe
            if(!(await prisma.rua.findUnique({where:{id: ruaId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "A rua selecionada não existe."})
            }

            const create = new CriandoFuncionario();
            //Criando Funcionario
            const funcionario = await create.execute({nome, cpf, telefone, numeroEndereco, ruaId, funcao});
                
            return res.send({
                funcionario,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de funcionário."});
        }
    }

}