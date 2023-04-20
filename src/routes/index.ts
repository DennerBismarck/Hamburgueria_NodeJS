import { Router } from "express";
import { Request, Response } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
    return res.status(200).send({success:"Server ON and Connect!"});
});

export{ routes };