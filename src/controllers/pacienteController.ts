import {Request, Response} from "express";
import pacienteServices from "../services/pacienteServices";

class pacienteController{
    constructor() {}

    async listarPaciente(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const paciente = await pacienteServices.listarPaciente(id, req.body);
            res.status(200).json({status: "ok", paciente: paciente});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
      }
      async atualizarPaciente(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const paciente = await pacienteServices.atualizarPaciente(id, req.body);
            res.status(200).json({status: "ok", paciente: paciente});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
    }
        
        async criarPaciente(req: Request, res: Response) {
            try{
                const id=parseInt (req.params.id);
                const paciente = await pacienteServices.criarPaciente(id, req.body);
                res.status(200).json({status: "ok", paciente: paciente});
            } catch (error) {
                res.status(500).json({status: "error", message: (error as any).message});
            }
        }
            async deletarPaciente(req: Request, res: Response) {
                try{
                    const id=parseInt (req.params.id);
                    const paciente = await pacienteServices.deletarPaciente(id, req.body);
                    res.status(200).json({status: "ok", paciente: paciente});
                } catch (error) {
                    res.status(500).json({status: "error", message: (error as any).message});
                }
    }
}

    export default new pacienteController;