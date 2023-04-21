import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoFuncionario } from "../../caseuse/funcionario/CreateFuncionario";

export const prisma = new PrismaClient;

export class CreateFuncionarioController{
    async handler(req: Request, res: Response){
        const {nome, cpf, telefone, numeroEndereco, ruaId, funcaoId} = req.body;
        try{
            //Verificando se o cliente ja existe
            if(await prisma.cliente.findUnique({where:{cpf:cpf}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Funcionário já existente."});
            }

            //Verificando se a rua do cliente existe
            if(!(await prisma.rua.findUnique({where:{id: ruaId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "A rua selecionada não existe."})
            }
            
            //Verificando se a função do funcionário existe
            if(!(await prisma.funcao.findUnique({where:{id: funcaoId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "A função seleiconada não existe."})
            }

            const create = new CriandoFuncionario();
            //Criando rua
            const funcionario = await create.execute({nome, cpf, telefone, numeroEndereco, ruaId, funcaoId});
                
            return res.send({
                funcionario,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de funcionário."});
        }
    }

}