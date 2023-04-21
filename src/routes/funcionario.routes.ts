import { Router } from "express";
import { CreateFuncionarioController } from "../controller/FuncionarioController/createFuncionario";
//import { ReadFuncionarioController } from "../controller/FuncionarioController/readFuncionario";
//import { updateFuncionarioController } from "../controller/FuncionarioController/updateFuncionario";
//import { deleteFuncionarioController } from "../controller/FuncionarioController/deleteFuncionario";

const funcionarioRoutes = Router();
const CreateFuncionario = new CreateFuncionarioController();
//const ReadFuncionario = new ReadFuncionarioController();

funcionarioRoutes.post("/create", CreateFuncionario.handler);
//funcionarioRoutes.post("/read", ReadCliente.handler);
//funcionarioRoutes.post("/update/:id", updateClienteController);
//funcionarioRoutes.post("/delete/:id", deleteClienteController);

export{funcionarioRoutes}