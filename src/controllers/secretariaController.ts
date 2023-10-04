import {Request, Response} from "express";
import secretariaServices from "../services/secretariaServices";

class pacienteController{
    constructor() {}

    async listarSecretaria(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const secretaria = await secretariaServices.listarSecretaria(id, req.body);
            res.status(200).json({status: "ok", secretaria: secretaria});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
      }
      async atualizarSecretaria(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const secretaria = await secretariaServices.atualizarSecretaria(id, req.body);
            res.status(200).json({status: "ok", secretaria: secretaria});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
    }
        
        async criarSecretaria(req: Request, res: Response) {
            try{
                const id=parseInt (req.params.id);
                const secretaria = await secretariaServices.criarSecretaria(id, req.body);
                res.status(200).json({status: "ok", secretaria: secretaria});
            } catch (error) {
                res.status(500).json({status: "error", message: (error as any).message});
            }
        }
            async deletarSecretaria(req: Request, res: Response) {
                try{
                    const id=parseInt (req.params.id);
                    const secretaria = await secretariaServices.deletarSecretaria(id, req.body);
                    res.status(200).json({status: "ok", secretaria: secretaria});
                } catch (error) {
                    res.status(500).json({status: "error", message: (error as any).message});
                }
    }
}

    export default new secretariaController;