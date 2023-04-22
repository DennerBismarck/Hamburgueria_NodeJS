import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoCompra } from "../../caseuse/compra/CreateCompra";

export const prisma = new PrismaClient;

export class CreateCompraController{
    async handler(req: Request, res: Response){
        const {precoCompra, clienteId, funcionarioId, cardapiodacompra} = req.body;
        try{
            //Verificando se o cliente existe
            if(!(await prisma.cliente.findUnique({where:{id: clienteId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "O cliente selecionado não existe."})
            }
            //Verificando se o funcionário existe
            if(!(await prisma.funcionario.findUnique({where:{id: funcionarioId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "O funcionário selecionado não existe."})
            }

            const create = new CriandoCompra();
            //Criando Compra
            const compra = await create.execute({precoCompra, clienteId, funcionarioId, cardapiodacompra});
                
            return res.send({
                compra,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de compra."});
        }
    }

}