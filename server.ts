import express from "express";
import * as dotenv from "dotenv";

import agendaRouter from "./src/routes/agendaRoutes";
import consultaRouter from "./src/routes/consultaRoutes";
import pacienteRouter from "./src/routes/pacienteRoutes";
import secretariaRouter from "./src/routes/secretariaRoutes";

dotenv.config();

const app = express()

app.use("api/agenda", agendaRouter);
app.use("api/consulta", consultaRouter);
app.use("api/paciente", pacienteRouter);
app.use("api/secretaria", secretariaRouter);

try {
    const PORT = process.env.PORT;
    if (PORT) {
        app.listen(PORT, () => {
        console.log(`Server na porta: ${PORT}`);
        });
    }
} catch (error) {
    console.error("porta não encontrada");
}