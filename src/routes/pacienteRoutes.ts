import { Router } from "express";
import pacienteController from "../controllers/pacienteController";

const pacienteRouter = Router();

pacienteRouter.get("/listar", pacienteController.listarPaciente);
pacienteRouter.post("/criar", pacienteController.criarPaciente);
pacienteRouter.get("/:id", pacienteController.pegarPaciente);
pacienteRouter.patch("/:id", pacienteController.atualizarPaciente);
pacienteRouter.delete("/:id", pacienteController.deletarPaciente);

export default pacienteRouter;