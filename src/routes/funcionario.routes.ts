import { Router } from "express";
import { CreateFuncionarioController } from "../controller/FuncionarioController/createFuncionario";
import { ReadFuncionarioController } from "../controller/FuncionarioController/readFuncionario";
import { updateFuncionarioController } from "../controller/FuncionarioController/updateFuncionario";
import { deleteFuncionarioController } from "../controller/FuncionarioController/deleteFuncionario";

const funcionarioRoutes = Router();
const CreateFuncionario = new CreateFuncionarioController();
const ReadFuncionario = new ReadFuncionarioController();

funcionarioRoutes.post("/create", CreateFuncionario.handler);
funcionarioRoutes.post("/read", ReadFuncionario.handler);
funcionarioRoutes.post("/update/:id", updateFuncionarioController);
funcionarioRoutes.post("/delete/:id", deleteFuncionarioController);

export{funcionarioRoutes}