import { Router } from "express";
import { CreateFuncaoController } from "../controller/FuncaoController/createFuncao";
import { ReadFuncaoController } from "../controller/FuncaoController/readFuncao";
import { updateFuncaoController } from "../controller/FuncaoController/updateFuncao";
import { deleteFuncaoController } from "../controller/FuncaoController/deleteFuncao";

const funcaoRoutes = Router();

const CreateFuncao = new CreateFuncaoController();
const ReadFuncao = new ReadFuncaoController();

funcaoRoutes.post("/create", CreateFuncao.handler);
funcaoRoutes.post("/read", ReadFuncao.handler);
funcaoRoutes.post("/update/:id", updateFuncaoController);
funcaoRoutes.post("/delete/:id", deleteFuncaoController);

export {funcaoRoutes};