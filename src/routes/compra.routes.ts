import { Router } from "express";
import { CreateCompraController } from "../controller/CompraController/createCompra";


const compraRoutes = Router();

const CreateCompra = new CreateCompraController();

compraRoutes.post("/create", CreateCompra.handler);


export{compraRoutes}