import { Router } from "express";
import consultaController from "../controllers/consultaController";

const consultaRouter = Router();

consultaRouter.get("/listar", consultaController.listarConsulta);
consultaRouter.post("/criar", consultaController.criarConsulta);
consultaRouter.get("/:id", consultaController.pegarConsulta);
consultaRouter.patch("/:id", consultaController.atualizarConsulta);
consultaRouter.delete("/:id", consultaController.deletarConsulta);

export default consultaRouter;