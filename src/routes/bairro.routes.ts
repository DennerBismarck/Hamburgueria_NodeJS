import { Router } from "express";
import { CreateBairroController } from "../controller/BairroController/createBairro";
import { ReadBairroController } from "../controller/BairroController/readBairro";

const bairroRoutes = Router();

const CreateBairro = new CreateBairroController();
const ReadBairro = new ReadBairroController();

bairroRoutes.post("/create", CreateBairro.handler);
bairroRoutes.post("/read", ReadBairro.handler);

export {bairroRoutes};