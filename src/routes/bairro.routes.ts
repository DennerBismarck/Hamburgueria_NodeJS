import { Router } from "express";
import { CreateBairroController } from "../controller/BairroController/createBairro";

const bairroRoutes = Router();

const CreateBairro = new CreateBairroController();

bairroRoutes.post("/create", CreateBairro.handler);

export {bairroRoutes};