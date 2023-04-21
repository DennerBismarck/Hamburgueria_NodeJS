import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { CriandoProduto } from "../../caseuse/produto/CreateProduto";

export const prisma = new PrismaClient;

export class CreateProdutoController{
    async handler(req: Request, res: Response){
        const {nome,  preco, descricao, tipoId} = req.body;
        try{
            //Verificando se o cliente ja existe
            if(await prisma.produto.findUnique({where:{nome:nome}})){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "Produto já existente."});
            }

            //Verificando se o tipo do produto existe
            if(!(await prisma.tipo.findUnique({where:{id: tipoId}}))){
                return res.status(StatusCodes.UNAUTHORIZED).send({error: "A tipo selecionado não existe."})
            }

            const create = new CriandoProduto();
            //Criando rua
            const produto = await create.execute({nome, preco, descricao, tipoId});
                
            return res.send({
                produto,
            });

        } 
        catch(err){
            return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro de produto."});
        }
    }

}