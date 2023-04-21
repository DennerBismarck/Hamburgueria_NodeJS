import { Router } from "express";
import { CreateBairroController } from "../controller/BairroController/createBairro";
import { ReadBairroController } from "../controller/BairroController/readBairro";
import { updateBairroController } from "../controller/BairroController/updateBairro";
import { deleteBairroController } from "../controller/BairroController/deleteBairro";

const bairroRoutes = Router();

const CreateBairro = new CreateBairroController();
const ReadBairro = new ReadBairroController();

bairroRoutes.post("/create", CreateBairro.handler);
bairroRoutes.post("/read", ReadBairro.handler);
bairroRoutes.post("/update/:id", updateBairroController);
bairroRoutes.post("/delete/:id", deleteBairroController);

export {bairroRoutes};