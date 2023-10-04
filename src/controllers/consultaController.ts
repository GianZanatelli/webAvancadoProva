import {Request, Response} from "express";
import consultaServices from "../src/services/consultaServices";

class consultaController{
    constructor() {}

    async listarConsulta(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const consulta = await consultaServices.listarConsulta(id, req.body);
            res.status(200).json({status: "ok", consulta: consulta});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
      }
      async atualizarConsulta(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const consulta = await consultaServices.atualizarConsulta(id, req.body);
            res.status(200).json({status: "ok", consulta: consulta});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
    }
        
        async criarConsulta(req: Request, res: Response) {
            try{
                const id=parseInt (req.params.id);
                const consulta = await consultaServices.criarConsulta(id, req.body);
                res.status(200).json({status: "ok", consulta: consulta});
            } catch (error) {
                res.status(500).json({status: "error", message: (error as any).message});
            }
        }
            async deletarConsulta(req: Request, res: Response) {
                try{
                    const id=parseInt (req.params.id);
                    const consulta = await consultaServices.deletarConsulta(id, req.body);
                    res.status(200).json({status: "ok", consulta: consulta});
                } catch (error) {
                    res.status(500).json({status: "error", message: (error as any).message});
                }
    }
}

    export default new consultaController;