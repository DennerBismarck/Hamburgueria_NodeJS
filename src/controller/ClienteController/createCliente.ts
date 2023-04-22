import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoCliente } from "../../caseuse/cliente/Createcliente";

export const prisma = new PrismaClient;

export class CreateClienteController{
    async handler(req: Request, res: Response){
        const {nome, cpf, telefone, numeroEndereco, ruaId} = req.body;
        try{
            //Verificando se o cliente ja existe
            if(await prisma.cliente.findUnique({where:{cpf:cpf}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Cliente já existente."});
            }

            //Verificando se a rua do cliente existe
            if(!(await prisma.rua.findUnique({where:{id: ruaId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "A rua selecionada não existe."})
            }

            const create = new CriandoCliente();
            //Criando cliente
            const cliente = await create.execute({nome, cpf, telefone, numeroEndereco, ruaId});
                
            return res.send({
                cliente,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de cliente."});
        }
    }

}