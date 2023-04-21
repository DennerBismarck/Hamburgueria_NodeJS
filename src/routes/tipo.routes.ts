import { Router } from "express";
import { CreateTipoController } from "../controller/TipoController/createTipo";
import { ReadTipoController } from "../controller/TipoController/readTipo";

const tipoRoutes = Router();

const CreateTipo = new CreateTipoController();
const ReadTipo = new ReadTipoController();

tipoRoutes.post("/create", CreateTipo.handler);
tipoRoutes.post("/read", ReadTipo.handler);

export{tipoRoutes}