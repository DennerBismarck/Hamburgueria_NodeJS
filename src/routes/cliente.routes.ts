import { Router } from "express";
import { CreateClienteController } from "../controller/ClienteController/createCliente";
import { ReadClienteController } from "../controller/ClienteController/readCliente";

const clienteRoutes = Router();
const CreateCliente = new CreateClienteController();
const ReadCliente = new ReadClienteController();

clienteRoutes.post("/create", CreateCliente.handler);
clienteRoutes.post("/read", ReadCliente.handler);

export{clienteRoutes}