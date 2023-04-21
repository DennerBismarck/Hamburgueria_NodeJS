import { Router } from "express";
import { CreateProdutoController } from "../controller/ProdutoController/createProduto";
import { ReadProdutoController } from "../controller/ProdutoController/readProduto";
import { updateProdutoController } from "../controller/ProdutoController/updateProduto";
import { deleteProdutoController } from "../controller/ProdutoController/deleteProduto";

const produtoRoutes = Router();

const CreateProduto = new CreateProdutoController();
const ReadProduto = new ReadProdutoController();

produtoRoutes.post("/create", CreateProduto.handler);
produtoRoutes.post("/read", ReadProduto.handler);
produtoRoutes.post("/update/:id", updateProdutoController);
produtoRoutes.post("/delete/:id", deleteProdutoController);

export{produtoRoutes};