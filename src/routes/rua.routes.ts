import { Router } from "express";
import { CreateRuaController } from "../controller/RuaController/createRua";
import { ReadRuaController } from "../controller/RuaController/readRua";
import { updateRuaController } from "../controller/RuaController/updateRua";
import { deleteRuaController } from "../controller/RuaController/deleteRua";


const ruaRoutes = Router();

const CreateRua = new CreateRuaController();
const ReadRua = new ReadRuaController();

ruaRoutes.post("/create", CreateRua.handler);
ruaRoutes.post("/read", ReadRua.handler);
ruaRoutes.post("/update/:id", updateRuaController);
ruaRoutes.post("/delete/:id", deleteRuaController);

export{ruaRoutes}