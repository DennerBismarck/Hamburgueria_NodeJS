import { Router } from "express";
import { Request, Response } from "express";
import { bairroRoutes } from "./bairro.routes";
import { funcaoRoutes } from "./funcao.routes";
import { tipoRoutes } from "./tipo.routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.status(200).send({success:"Server ON and Connect!"});
});

//Criando as rotas de cada tabela
routes.use("/bairro",bairroRoutes);
routes.use("/funcao", funcaoRoutes);
routes.use("/tipo", tipoRoutes);

export{ routes };