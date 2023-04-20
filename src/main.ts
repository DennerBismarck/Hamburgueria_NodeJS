import bodyParser from "body-parser";
import express from "express";
import { routes } from "./routes";

const cors = require('cors');

//Criando a aplicação express
const app = express();

//Utilizando o BodyParse para o tratamento do corpo da requisição
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Setando Rotas no servidor
app.use(routes);

//Utilizando o Cors
app.use(cors());

app.listen(3000, () => console.log("Server is running in port 3000!"));