import { Router } from "express";
import { CreateFuncaoController } from "../controller/FuncaoController/createFuncao";
import { ReadFuncaoController } from "../controller/FuncaoController/readFuncao";

const funcaoRoutes = Router();

const CreateFuncao = new CreateFuncaoController();
const ReadFuncao = new ReadFuncaoController();

funcaoRoutes.post("/create", CreateFuncao.handler);
funcaoRoutes.post("/read", ReadFuncao.handler);

export {funcaoRoutes};