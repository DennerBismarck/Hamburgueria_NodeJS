import { Router } from "express";
import { Request, Response } from "express";
import { bairroRoutes } from "./bairro.routes";
import { ruaRoutes } from "./rua.routes";
import { clienteRoutes } from "./cliente.routes";
import { funcionarioRoutes } from "./funcionario.routes";
import { compraRoutes } from "./compra.routes";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.status(200).send({success:"Server ON and Connect!"});
});

//Criando as rotas de cada tabela
routes.use("/bairro",bairroRoutes);
routes.use("/rua", ruaRoutes);
routes.use("/cliente", clienteRoutes);
routes.use("/funcionario", funcionarioRoutes);
routes.use("/compra", compraRoutes);

export{ routes };