import { Router } from "express";
import secretariaController from "../controllers/secretariaController";

const secretariaRouter = Router();

secretariaRouter.get("/listar", secretariaController.listarSecretaria);
secretariaRouter.post("/criar", secretariaController.criarSecretaria);
secretariaRouter.get("/:id", secretariaController.pegarSecretaria);
secretariaRouter.patch("/:id", secretariaController.atualizarSecretaria);
secretariaRouter.delete("/:id", secretariaController.deletarSecretaria);

export default secretariaRouter;