import { Router } from "express";
import { CreateFuncaoController } from "../controller/FuncaoController/createFuncao";

const funcaoRoutes = Router();

const CreateFuncao = new CreateFuncaoController();


funcaoRoutes.post("/create", CreateFuncao.handler);

export {funcaoRoutes};