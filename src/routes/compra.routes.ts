import { Router } from "express";
import { CreateCompraController } from "../controller/CompraController/createCompra";
import { ReadCompraController } from "../controller/CompraController/readCompra";
import { updateCompraController } from "../controller/CompraController/updateCompra";

const compraRoutes = Router();

const CreateCompra = new CreateCompraController();
const ReadCompra = new ReadCompraController();

compraRoutes.post("/create", CreateCompra.handler);
compraRoutes.post("/read", ReadCompra.handler);
compraRoutes.post("/update/:id", updateCompraController);

export{compraRoutes}