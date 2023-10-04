import { Router } from "express";
import agendaController from "../controllers/agendaController";

const agendaRouter = Router();

agendaRouter.get("/listar", agendaController.listarAgenda);
agendaRouter.post("/criar", agendaController.criarAgenda);
agendaRouter.get("/:id", agendaController.pegarAgenda);
agendaRouter.patch("/:id", agendaController.atualizarAgenda);
agendaRouter.delete("/:id", agendaController.deletarAgenda);

export default agendaRouter;