import { Router } from "express";
import { CreateClienteController } from "../controller/ClienteController/createCliente";
import { ReadClienteController } from "../controller/ClienteController/readCliente";
import { updateClienteController } from "../controller/ClienteController/updateCliente";
import { deleteClienteController } from "../controller/ClienteController/deleteCliente";

const clienteRoutes = Router();
const CreateCliente = new CreateClienteController();
const ReadCliente = new ReadClienteController();

clienteRoutes.post("/create", CreateCliente.handler);
clienteRoutes.post("/read", ReadCliente.handler);
clienteRoutes.post("/update/:id", updateClienteController);
clienteRoutes.post("/delete/:id", deleteClienteController);

export{clienteRoutes}