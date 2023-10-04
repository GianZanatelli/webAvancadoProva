import {Request, Response} from "express";
import agendaServices from "../services/agendaServices";

class agendaController{
    constructor() {}

    async listarAgenda(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const agenda = await agendaServices.listarAgenda();
            res.status(200).json({status: "ok", agenda: agenda});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
      }
      async atualizarAgenda(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const agenda = await agendaServices.atualizarAgenda(id, req.body);
            res.status(200).json({status: "ok", agenda: agenda});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
    }
        
        async criarAgenda(req: Request, res: Response) {
            try{
                const id=parseInt (req.params.id);
                const agenda = await agendaServices.criarAgenda(req.body);
                res.status(200).json({status: "ok", agenda: agenda});
            } catch (error) {
                res.status(500).json({status: "error", message: (error as any).message});
            }
        }
            async deletarAgenda(req: Request, res: Response) {
                try{
                    const id=parseInt (req.params.id);
                    const agenda = await agendaServices.deletarAgenda(id);
                    res.status(200).json({status: "ok", agenda: agenda});
                } catch (error) {
                    res.status(500).json({status: "error", message: (error as any).message});
                }
    }
    async pegarAgenda(req: Request, res: Response) {
        try{
            const id=parseInt (req.params.id);
            const agenda = await agendaServices.pegarAgenda(id);
            res.status(200).json({status: "ok", agenda: agenda});
        } catch (error) {
            res.status(500).json({status: "error", message: (error as any).message});
        }
}
}

    export default new agendaController;