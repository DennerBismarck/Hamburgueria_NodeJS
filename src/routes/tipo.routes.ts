import { Router } from "express";
import { CreateTipoController } from "../controller/TipoController/createTipo";
import { ReadTipoController } from "../controller/TipoController/readTipo";
import { updateTipoController } from "../controller/TipoController/updateTipo";

const tipoRoutes = Router();

const CreateTipo = new CreateTipoController();
const ReadTipo = new ReadTipoController();

tipoRoutes.post("/create", CreateTipo.handler);
tipoRoutes.post("/read", ReadTipo.handler);
tipoRoutes.post("/update/:id", updateTipoController);

export{tipoRoutes}